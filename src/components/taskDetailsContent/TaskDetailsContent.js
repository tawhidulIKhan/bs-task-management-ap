import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TaskManager from '../../services/api/tasks/request';
import TaskForm from '../taskForm/TaskForm'

export default function TaskDetailsContent() {
  const {id} = useParams();
  const [task, setTask] = useState(null)
  useEffect(() => {
    fetchTask(id)
  }, [id])
  
  const fetchTask = async (id) => {
    try {
      const response = await TaskManager.show({
        id: id
      });
      setTask(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {task ? <TaskForm task={task} /> : null}
    </div>
  )
}
