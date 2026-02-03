// global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'realscout-home-value': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      // Add specific props if known, otherwise allow any
      [key: string]: any;
    };
  }
}
