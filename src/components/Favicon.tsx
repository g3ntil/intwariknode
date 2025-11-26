import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Base64-encoded transparent 1x1 pixel
const transparentPixel = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

export function Favicon() {
  useEffect(() => {
    // Create a link element for the favicon
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = transparentPixel;
    
    // Add to document head if it doesn't exist
    if (!document.querySelector("link[rel*='icon']")) {
      document.head.appendChild(link);
    }

    // Also set apple-touch-icon
    const appleLink = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement || document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = transparentPixel;
    
    if (!document.querySelector("link[rel='apple-touch-icon']")) {
      document.head.appendChild(appleLink);
    }
  }, []);

  return (
    <Helmet>
      <link rel="icon" type="image/png" href={transparentPixel} />
      <link rel="apple-touch-icon" href={transparentPixel} />
      <link rel="shortcut icon" href={transparentPixel} />
    </Helmet>
  );
}
