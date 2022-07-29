import React from 'react'

export default function Error(props) {
  return (
    <div>{props.error.map(er => <span>{er}</span>)}</div>
  )
}
