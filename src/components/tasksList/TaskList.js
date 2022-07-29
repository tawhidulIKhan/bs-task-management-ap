import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import endpoints from '../../config/endpoints'
import TaskManager from '../../services/api/tasks/request';
import PageHeader from '../pageHeader/PageHeader';

export default function TaskList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await TaskManager.all();
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='container'>
      <PageHeader 
        title="All Task" 
        btnLabel="Create New Task" 
        btnLink={endpoints.TASKS_CREATE}
      />
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
