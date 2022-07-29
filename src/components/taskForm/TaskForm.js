import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MemberManager from '../../services/api/members/request';
import './TaskForm.scss';

export default function TaskForm() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetchMembers();
  }, [])

  const fetchMembers = async () => {
    try {
      const response = await MemberManager.all();
      setMembers(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
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
                {members.map(member => <option key={member.id}>{member.name}</option>)}
              </select>
            </p>
            <button className='btn--primary'>Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}
