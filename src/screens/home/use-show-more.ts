import {useState} from 'react';

export const useShowMore = (increment: number) => {
  const [limit, setLimit] = useState(increment);

  const onShowMore = () => {
    setLimit(limit + increment);
  };

  return {
    limit,
    onShowMore,
  };
};
