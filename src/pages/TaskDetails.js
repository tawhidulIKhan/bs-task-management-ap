import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Loading from '../components/loading/Loading';
import TaskForm from '../components/taskForm/TaskForm';
import TaskManager from '../services/api/tasks/request';

export default function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchTask(id);
  }, [id]);

  const fetchTask = async (id) => {
    try {
      setLoading(true);
      const response = await TaskManager.show({
        id: id,
      });
      setTask(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return <Layout>{loading ? <Loading /> : <TaskForm task={task} />}</Layout>;
}
