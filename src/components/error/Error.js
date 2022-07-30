import React from 'react';
import './Error.scss';

export default function Error(props) {
  return (
    <div className="error">
      {props.error.map((er, index) => (
        <span key={index}>{er}</span>
      ))}
    </div>
  );
}
