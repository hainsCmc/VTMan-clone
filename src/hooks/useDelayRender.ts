import {useEffect, useState} from 'react';

export const useDelayRender = (duration = 5) => {
  const [enableRender, setEnableRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEnableRender(true);
    }, duration);
  }, []);

  return {enableRender};
};
