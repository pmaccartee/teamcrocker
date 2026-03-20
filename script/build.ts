import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, writeFile, mkdir } from "fs/promises";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  // For Replit static deployments, use index.html as the 404 fallback
  // so that SPA routing works for deep links like /blog
  try {
    const indexHtml = await readFile("dist/public/index.html", "utf-8");
    await writeFile("dist/public/404.html", indexHtml, "utf-8");
    
    // Create specific folders for known SPA routes to ensure they load on static hosting
    await mkdir("dist/public/blog", { recursive: true });
    await writeFile("dist/public/blog/index.html", indexHtml, "utf-8");
    
    // Copy the static recycle page into the root as well as the folder just in case
    try {
      const recycleHtml = await readFile("client/public/recycle/index.html", "utf-8");
      await writeFile("dist/public/recycle.html", recycleHtml, "utf-8");
      console.log("copied recycle.html to root");
    } catch (e) {
      console.log("no recycle page found to copy");
    }
    
    console.log("created fallback HTML files for SPA routing");
  } catch (err) {
    console.log("could not create fallback HTML files:", err);
  }

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
