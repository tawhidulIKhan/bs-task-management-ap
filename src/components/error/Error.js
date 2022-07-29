import React from 'react'
import './Error.scss';

export default function Error(props) {
  return (
    <div className='error'>{props.error.map(er => <span>{er}</span>)}</div>
  )
}
