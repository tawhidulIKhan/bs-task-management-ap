import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import endpoints from '../../config/endpoints';
import MemberManager from '../../services/api/members/request';
import TaskManager from '../../services/api/tasks/request';
import './TaskForm.scss';
const INITIAL_USER_INPUT = {
  title: '',
  description: '',
  member: null
}
export default function TaskForm() {
  const [members, setMembers] = useState([]);
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT)
  const navigate = useNavigate();
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
  const createTask = async (ev) => {
    ev.preventDefault();
    try {
      await TaskManager.create(userInput);
      navigate(endpoints.TASKS);
    } catch (error) {
    console.error(error)    
    }
  }

  const titleHandler =(ev) => 
    setUserInput({...userInput, title: ev.target.value})
  
    const descriptionHandler =(ev) => 
    setUserInput({...userInput, descriptionHandler: ev.target.value})
  
    const memberHandler =(ev) => 
    setUserInput({...userInput, member: ev.target.value})

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
              <input onChange={titleHandler} className='input-field' placeholder='Enter title' />
            </p>
            <p className="form__item">
              <label className='form__item__label'>Description</label>
              <textarea onChange={descriptionHandler} className='input-field' placeholder='Enter your description' />
            </p>
            <p className="form__item">
              <label className='form__item__label'>Members</label>
              <select onChange={memberHandler} className='input-select'>
                {members.map(member => <option key={member.id}>{member.name}</option>)}
              </select>
            </p>
            <button onClick={createTask} className='btn--primary'>Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}
