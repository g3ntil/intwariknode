import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTopOnMount component
 * Automatically scrolls to the top of the page whenever the route changes
 * This ensures that navigating from footer links or any other link
 * starts the new page at the top position
 */
export function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }, [pathname]);

  return null;
}
