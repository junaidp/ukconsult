import { useEffect } from 'react';

export function useExitIntent(onExitIntent) {
  useEffect(() => {
    function handleMouseOut(e) {
      // Detect leaving via top of viewport
      if (!e.relatedTarget && !e.toElement && e.clientY < 10) {
        onExitIntent();
      }
    }
    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, [onExitIntent]);
}
