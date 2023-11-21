import {useState} from 'react';

export const useLoadList = () => {
  const [loadingList, setLoadingListState] = useState<
    false | 'first' | 'refreshing' | 'loadmore'
  >('first');

  const setLoadingList = (
    value: false | 'first' | 'refreshing' | 'loadmore',
  ) => {
    setLoadingListState(value);
  };

  return {setLoadingList, loadingList};
};
