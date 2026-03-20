import { execSync } from 'child_process';

try {
  console.log('Pushing to GitHub...');
  const result = execSync('git push -u origin main', { encoding: 'utf-8' });
  console.log(result);
} catch (error) {
  console.error('Failed to push:', error.message);
  if (error.stdout) console.log(error.stdout);
  if (error.stderr) console.error(error.stderr);
}
