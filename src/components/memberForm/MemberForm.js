import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import endpoints from '../../config/endpoints';
import MemberManager from '../../services/api/members/request';
import { successMsg } from '../../utils/helpers';
import Error from '../error/Error';
import MemberTasks from '../memberTasks/MemberTasks';
import PageHeader from '../pageHeader/PageHeader';
import './MemberForm.scss';
const INITIAL_USER_INPUT = {
  name: '',
  email: ''
};
export default function MemberForm(props) {
  const { member } = props;
  const [errors, setErrors] = useState(null);
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);
  const navigate = useNavigate();

  useEffect(() => {
    setUserInput({ ...member });
  }, [member]);

  const submitForm = (ev) => {
    ev.preventDefault();
    if (!userInput.name) {
      setErrors({ name: ['Enter member name'] });
      return;
    }
    member ? updateMember() : createMember();
  };

  const createMember = async () => {
    try {
      const response = await MemberManager.create(userInput);
      console.log(response);
      if (response.data.errors) {
        setErrors(response.data.errors);
        return;
      }
      navigate(endpoints.MEMBERS);
    } catch (error) {
      console.error(error);
    }
  };

  const updateMember = async () => {
    try {
      await MemberManager.update({
        ...userInput,
        id: member.id
      });
      successMsg('Member Updated');
    } catch (error) {
      console.error(error);
    }
  };

  const nameHandler = (ev) => setUserInput({ ...userInput, name: ev.target.value });

  const emailHandler = (ev) => setUserInput({ ...userInput, email: ev.target.value });

  const deleteMember = async (ev) => {
    ev.preventDefault();
    if (window.confirm('Are you sure to delete')) {
      try {
        await MemberManager.remove({
          id: member.id
        });
        navigate(endpoints.MEMBERS);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="memberform form">
      <div className="container-xs">
        <PageHeader
          title={member ? 'Update Member' : 'Create Member'}
          linkLabel="Back to members"
          link={endpoints.MEMBERS}
        />
        <div className="page__content">
          <form className="form">
            <p className="form__item">
              <label className="form__item__label">
                Name<span className="form__item__required">*</span>
              </label>
              <input
                onChange={nameHandler}
                className="input-field"
                placeholder="Enter member name"
                value={userInput.name}
              />
              {errors?.name ? <Error error={errors.name} /> : null}
            </p>
            <p className="form__item">
              <label className="form__item__label">Email</label>
              <input
                onChange={emailHandler}
                className="input-field"
                placeholder="Enter member email"
                value={userInput.email}
              />
              {errors?.email ? <Error error={errors.email} /> : null}
            </p>
            {member ? <MemberTasks tasks={member.tasks} /> : null}
            <div className="memberform__actions">
              <button onClick={submitForm} className="btn--primary">
                {member ? 'Update' : 'Create'}
              </button>
              {member ? (
                <button onClick={deleteMember} className="btn--danger">
                  Delete
                </button>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
