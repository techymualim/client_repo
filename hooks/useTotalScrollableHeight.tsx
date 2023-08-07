import { useEffect, useState } from 'react';

const useTotalScrollableHeight = () => {
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    const calculateTotalHeight = () => {
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(bodyHeight, documentHeight);
      setTotalHeight(maxScroll - windowHeight);
    };

    calculateTotalHeight();
    window.addEventListener('resize', calculateTotalHeight);
    return () => window.removeEventListener('resize', calculateTotalHeight);
  }, []);

  return totalHeight;
};

export default useTotalScrollableHeight;
