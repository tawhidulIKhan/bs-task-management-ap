import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import endpoints from '../../config/endpoints';
import MemberManager from '../../services/api/members/request';
import TaskManager from '../../services/api/tasks/request';
import { successMsg } from '../../utils/helpers';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import PageHeader from '../pageHeader/PageHeader';
import './TaskForm.scss';
const INITIAL_USER_INPUT = {
  title: '',
  description: '',
  assignedTo: null
}
export default function TaskForm(props) {
  const { task } = props;
  const [errors, setErrors] = useState(null);
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
      const response = await MemberManager.getAll();
      setMembers(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const  submitForm = (ev) => {
    ev.preventDefault();
    task ? updateTask() : createTask()
  }

  const createTask = async () => {
    try {
      const response = await TaskManager.create(userInput);
      if(response.data.errors){
        setErrors(response.data.errors);
        return;
      }
      navigate(endpoints.TASKS);
    } catch (error) {
      console.error(error)    
    }
  }

  const updateTask = async () => {
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
    setUserInput({...userInput, description: ev.target.value})
  
    const memberHandler =(ev) => 
    setUserInput({...userInput, assignedTo: ev.target.value})
  
  const deleteTask = async (ev) => {
    ev.preventDefault();
    if(window.confirm("Are you sure to delete")){
      try {
        await TaskManager.remove({
          id: task.id
        });
        navigate(endpoints.TASKS);
      } catch (error) {
        console.error(error)    
      }  
    }
  }

  return (
    loading ? <Loading /> : (
    <div className='taskform form'>
      <div className='container-xs'>
        <PageHeader 
          title={task ? "Update Task" : "Create Task"} 
          linkLabel="Back to tasks" 
          link={endpoints.TASKS}
        />
        <div className='page__content'>
          <form className='form'>
            <p className="form__item">
              <label className='form__item__label'>Title <span className='form__item__required'>*</span></label>
              <input onChange={titleHandler} className='input-field' placeholder='Enter title' value={userInput.title} />
              {errors?.title ? <Error error={errors.title} /> : null}
            </p>
            <p className="form__item">
              <label className='form__item__label'>Description</label>
              <textarea onChange={descriptionHandler} className='input-field' placeholder='Enter your description' value={userInput.description} />
              {errors?.description ? <Error error={errors.description} /> : null}
            </p>
            <p className="form__item">
              <label className='form__item__label'>Member</label>
              <select onChange={memberHandler} className='input-select'>
                <option selected>Select a member</option>
                {members.map(member => <option selected={userInput.assignedTo === member.id} key={member.id} value={member.id}>{member.name}</option>)}
              </select>
            </p>
            <div className='taskform__actions'>
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
            </div>
          </form>
        </div>
      </div>
    </div>
    )
  )
}
