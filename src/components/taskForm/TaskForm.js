import React from 'react'
import { Link } from 'react-router-dom'
import './TaskForm.scss';

export default function TaskForm() {
  return (
    <div className='taskform form'>
      <div className='container-xs'>
        <div className='page__header'>
          <h2 className='page__header__title'>Create task</h2>
          <div>
            <Link to="/tasks">Back to Tasks</Link>
          </div>
        </div>
        <div className='page__content'>
          <form className='form'>
            <p className="form__item">
              <label className='form__item__label'>Title</label>
              <input className='input-field' placeholder='Enter title' />
            </p>
            <p className="form__item">
              <label className='form__item__label'>Description</label>
              <textarea className='input-field' placeholder='Enter your description' />
            </p>
            <p className="form__item">
              <label className='form__item__label'>Members</label>
              <select className='input-select'>
                <option>John</option>
                <option>Jessica</option>
                <option>David</option>
                <option>Adil</option>
              </select>
            </p>
            <button className='btn--primary'>Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}
