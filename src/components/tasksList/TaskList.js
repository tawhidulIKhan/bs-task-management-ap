import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import endpoints from '../../config/endpoints';
import TaskManager from '../../services/api/tasks/request';
import NotFound from '../notFound/NotFound';
import PageHeader from '../pageHeader/PageHeader';
import Pagination from '../pagination/Pagination';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [meta, setMeta] = useState({
    currentPage: 1,
  });

  useEffect(() => {
    fetchTasks(meta);
  }, []);

  const fetchTasks = async (request) => {
    try {
      const response = await TaskManager.all(request);
      setTasks(response.data);
      setMeta(response.meta);
    } catch (error) {
      console.error(error);
    }
  };

  const onPaginate = (currentPage) => {
    fetchTasks({ currentPage });
  };

  return (
    <div className="container">
      <PageHeader
        title="All Task"
        btnLabel="Create New Task"
        btnLink={endpoints.TASKS_CREATE}
      />
      <div className="page__content">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Assigned to</th>
              <th>Creation date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <Link to={endpoints.TASKS_DETAILS.replace(':id', task.id)}>
                    {task.title}
                  </Link>
                </td>
                <td>{task.description || '-'}</td>
                <td>{task.assignedMember}</td>
                <td>{task.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!tasks.length ? <NotFound message="No Tasks Found" /> : null}
        {!tasks.length ? (
          <Pagination
            onClick={onPaginate}
            perPage={meta.perPage}
            total={meta.total}
            currentPage={meta.currentPage}
          />
        ) : null}
      </div>
    </div>
  );
}
