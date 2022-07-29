import React from 'react'
import { Oval } from 'react-loader-spinner';
import './Loading.scss';
export default function Loading() {
  return (
    <div className='loading'>
        <Oval
            height={80}
            width={80}
            color="#3E02BD"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#3E02BD"
            strokeWidth={2}
            strokeWidthSecondary={2}

        />
    </div>
  )
}
