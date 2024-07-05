/// <reference types="vite/client" />

declare module JSX {
  interface IntrinsicElements {
    "ion-icon": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        name?: string;
        className?: string;
        defaultChecked?: boolean;
      },
      HTMLElement
    >;
  }
}
