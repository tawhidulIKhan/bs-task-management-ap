import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import endpoints from '../../config/endpoints';
import MemberManager from '../../services/api/members/request';
import { successMsg } from '../../utils/helpers';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import './MemberForm.scss';
const INITIAL_USER_INPUT = {
  name: '',
  email: ''
}
export default function MemberForm(props) {
  const { member } = props;
  const [members, setMembers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT)
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300)
  }, [])

  useEffect(() => {
    setUserInput({...member})
  }, [member])

  const  submitForm = (ev) => {
    ev.preventDefault();
    member ? updateMember() : createMember()
  }

  const createMember = async (ev) => {
    try {
      const response = await MemberManager.create(userInput);
      console.log(response);
      if(response.data.errors){
        setErrors(response.data.errors);
        return;
      }
      navigate(endpoints.MEMBERS);
    } catch (error) {
      console.error(error)    
    }
  }

  const updateMember = async (ev) => {
    try {
      await MemberManager.update({
        ...userInput,
        id: member.id
      });
      successMsg("Member Updated")
    } catch (error) {
    console.error(error)    
    }
  }

  const nameHandler =(ev) => 
    setUserInput({...userInput, name: ev.target.value})
  
    const emailHandler =(ev) => 
    setUserInput({...userInput, email: ev.target.value})
    
  const deleteMember = async (ev) => {
    ev.preventDefault();
    if(window.confirm("Are you sure to delete")){
      try {
        await MemberManager.remove({
          id: member.id
        });
        navigate(endpoints.MEMBERS);
      } catch (error) {
        console.error(error)    
      }  
    }
  }

  return (
    loading ? <Loading /> : (
    <div className='MemberForm form'>
      <div className='container-xs'>
        <div className='page__header'>
          <h2 className='page__header__title'>Create member</h2>
          <div>
            <Link to="/members">Back to Members</Link>
          </div>
        </div>
        <div className='page__content'>
          <form className='form'>
            <p className="form__item">
              <label className='form__item__label'>Name</label>
              <input onChange={nameHandler} className='input-field' placeholder='Enter name' value={userInput.name} />
              {errors?.name ? <Error error={errors.name} /> : null}
            </p>
            <p className="form__item">
              <label className='form__item__label'>Email</label>
              <input onChange={emailHandler} className='input-field' placeholder='Enter email' value={userInput.email} />
              {errors?.email ? <Error error={errors.email} /> : null}
            </p>
            <button onClick={submitForm} className='btn--primary'>
              {member ? 'Update' : 'Create'}
            </button>
            {
              member ? (            
              <button onClick={deleteMember} className='btn--danger'>
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
