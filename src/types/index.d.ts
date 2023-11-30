export {};

declare global {
  interface Window {
    cloudinary: any;
    galleryWidget: (...args: any[]) => void;
  }
}