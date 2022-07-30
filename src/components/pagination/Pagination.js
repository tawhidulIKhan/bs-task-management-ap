import React from 'react';
import usePagination from '../../hooks/usePagination';
import './Pagination.scss';
export default function Pagination(props) {
  const pagination = usePagination({
    perPage: props.perPage,
    total: props.total
  });
  const onClickHandler = (page) => {
    props.onClick(page);
  };
  return (
    <ul className="pagination">
      {pagination.map((itr, index) => (
        <li key={index} className={itr === props.currentPage ? 'pagination__active' : ''}>
          <button onClick={() => onClickHandler(itr)}>{itr}</button>
        </li>
      ))}
    </ul>
  );
}
