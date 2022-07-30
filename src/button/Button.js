import React from 'react';
import Loading from '../components/loading/Loading';
import './Button.scss';

export default function Button(props) {
  const { label, onClick, loading } = props;
  return (
    <button onClick={onClick} className="btn btn--primary" disabled={loading}>
      {loading ? <Loading /> : null}
      {label}
    </button>
  );
}
