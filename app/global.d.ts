declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

declare module "*.css";
declare module "*.scss";
declare module "*.sass";

export {};