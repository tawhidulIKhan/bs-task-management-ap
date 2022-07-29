import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import endpoints from '../../config/endpoints'
import TaskManager from '../../services/api/tasks/request';

export default function TaskList() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetchTasks();
  }, [])

  /**
   * function to fetch all tasks
   */

  const fetchTasks = async () => {
    try {
      const response = await TaskManager.all();
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='container'>
      <div className='page__header'>
        <h2 className='page__header__title'>All Tasks</h2>
        <div>
          <Link to={endpoints.TASKS_CREATE} className='btn--link'>Create New Task</Link>
        </div>
      </div>
      <div className='page__content'>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Creation date</th>
              <th>Assigned to</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>
                  <Link to={endpoints.TASKS_DETAILS.replace(":id", task.id)}>{task.title}</Link>
                </td>
                <td>{task.createdAt}</td>
                <td>{task.assignedMember}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
