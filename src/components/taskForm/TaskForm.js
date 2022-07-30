import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../button/Button';
import endpoints from '../../config/endpoints';
import MemberManager from '../../services/api/members/request';
import TaskManager from '../../services/api/tasks/request';
import { successMsg } from '../../utils/helpers';
import Error from '../error/Error';
import PageHeader from '../pageHeader/PageHeader';
import './TaskForm.scss';

const INITIAL_USER_INPUT = {
  title: '',
  description: '',
  assignedTo: null,
};
export default function TaskForm(props) {
  const { task } = props;
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const [members, setMembers] = useState([]);
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    setUserInput({ ...task });
  }, [task]);

  const fetchMembers = async () => {
    try {
      const response = await MemberManager.getAll();
      setMembers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    if (!userInput.title) {
      setErrors({ title: ['Enter member title'] });
      return;
    }
    task ? updateTask() : createTask();
  };

  const createTask = async () => {
    try {
      setLoading(true);
      const response = await TaskManager.create(userInput);
      if (response.data.errors) {
        setErrors(response.data.errors);
        setLoading(false);
        return;
      }
      setLoading(false);
      navigate(endpoints.TASKS);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const updateTask = async () => {
    try {
      setLoading(true);
      await TaskManager.update({
        ...userInput,
        id: task.id,
      });
      successMsg('Task Updated');
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const titleHandler = (ev) =>
    setUserInput({ ...userInput, title: ev.target.value });

  const descriptionHandler = (ev) =>
    setUserInput({ ...userInput, description: ev.target.value });

  const memberHandler = (ev) =>
    setUserInput({ ...userInput, assignedTo: ev.target.value });

  const deleteTask = async (ev) => {
    ev.preventDefault();
    if (window.confirm('Are you sure to delete')) {
      try {
        setDeleteLoading(true);
        await TaskManager.remove({
          id: task.id,
        });
        setDeleteLoading(false);
        navigate(endpoints.TASKS);
      } catch (error) {
        setDeleteLoading(false);
        console.error(error);
      }
    }
  };

  return (
    <div className="taskform form">
      <div className="container-xs">
        <PageHeader
          title={task ? 'Update Task' : 'Create Task'}
          linkLabel="Back to tasks"
          link={endpoints.TASKS}
        />
        <div className="page__content">
          <form className="form">
            <p className="form__item">
              <label className="form__item__label">
                Title <span className="form__item__required">*</span>
              </label>
              <input
                onChange={titleHandler}
                className="input-field"
                placeholder="Enter title"
                value={userInput.title}
              />
              {errors?.title ? <Error error={errors.title} /> : null}
            </p>
            <p className="form__item">
              <label className="form__item__label">Description</label>
              <textarea
                onChange={descriptionHandler}
                className="input-field"
                placeholder="Enter your description"
                value={userInput.description}
              />
              {errors?.description ? (
                <Error error={errors.description} />
              ) : null}
            </p>
            <p className="form__item">
              <label className="form__item__label">Assign to</label>
              <select onChange={memberHandler} className="input-select">
                <option selected>Select a member</option>
                {!members.length ? (
                  <option disabled>
                    No member found, please create member first
                  </option>
                ) : null}
                {members.map((member) => (
                  <option
                    selected={userInput.assignedTo === member.id}
                    key={member.id}
                    value={member.id}
                  >
                    {member.name}
                  </option>
                ))}
              </select>
            </p>
            <div className="taskform__actions">
              <Button
                loading={loading}
                onClick={submitForm}
                label={task ? 'Update' : 'Create'}
              />
              {task ? (
                <Button
                  loading={deleteLoading}
                  onClick={deleteTask}
                  className="btn--danger"
                  label={'Delete'}
                />
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
