import React, { useEffect, useState } from 'react';

export default function usePagination(props) {
  const [paginationArr, setPaginationArr] = useState([]);

  useEffect(() => {
    const totalPage = Math.ceil(props.total / props.perPage);
    let arr = [];
    if (totalPage) {
      for (let i = 1; i <= totalPage; i++) {
        arr.push(i);
      }
      setPaginationArr(arr);
    }
  }, [props.total]);

  return paginationArr;
}
