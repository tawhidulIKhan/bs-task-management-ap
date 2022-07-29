import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import endpoints from '../../config/endpoints';
import MemberManager from '../../services/api/members/request';
import TaskManager from '../../services/api/tasks/request';
import { successMsg } from '../../utils/helpers';
import Loading from '../loading/Loading';
import './TaskForm.scss';
const INITIAL_USER_INPUT = {
  title: '',
  description: '',
  assignedTo: null
}
export default function TaskForm(props) {
  const { task } = props;

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT)
  const navigate = useNavigate();
  useEffect(() => {
    fetchMembers();
    setTimeout(() => {
      setLoading(false);
    }, 300)
  }, [])

  useEffect(() => {
    setUserInput({...task})
  }, [task])

  const fetchMembers = async () => {
    try {
      const response = await MemberManager.all();
      setMembers(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const  submitForm = (ev) => {
    ev.preventDefault();
    task ? updateTask() : createTask()
  }

  const createTask = async (ev) => {
    try {
      await TaskManager.create(userInput);
      navigate(endpoints.TASKS);
    } catch (error) {
      console.error(error)    
    }
  }

  const updateTask = async (ev) => {
    try {
      await TaskManager.update({
        ...userInput,
        id: task.id
      });
      successMsg("Task Updated")
    } catch (error) {
    console.error(error)    
    }
  }

  const titleHandler =(ev) => 
    setUserInput({...userInput, title: ev.target.value})
  
    const descriptionHandler =(ev) => 
    setUserInput({...userInput, descriptionHandler: ev.target.value})
  
    const memberHandler =(ev) => 
    setUserInput({...userInput, assignedTo: ev.target.value})
  
  const deleteTask = async (ev) => {
    ev.preventDefault();
    try {
      await TaskManager.remove({
        id: task.id
      });
      navigate(endpoints.TASKS);
    } catch (error) {
      console.error(error)    
    }
  }

  return (
    loading ? <Loading /> : (
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
              <input onChange={titleHandler} className='input-field' placeholder='Enter title' value={userInput.title} />
            </p>
            <p className="form__item">
              <label className='form__item__label'>Description</label>
              <textarea onChange={descriptionHandler} className='input-field' placeholder='Enter your description' value={userInput.description} />
            </p>
            <p className="form__item">
              <label className='form__item__label'>Members</label>
              <select onChange={memberHandler} className='input-select'>
                {members.map(member => <option selected={userInput.assignedTo === member.id} key={member.id} value={member.id}>{member.name}</option>)}
              </select>
            </p>
            <button onClick={submitForm} className='btn--primary'>
              {task ? 'Update' : 'Create'}
            </button>
            {
              task ? (            
              <button onClick={deleteTask} className='btn--danger'>
                Delete
              </button>
            ): null
            }
          </form>
        </div>
      </div>
    </div>
    )
  )
}
