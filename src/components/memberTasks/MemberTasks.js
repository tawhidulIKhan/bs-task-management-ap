import React from 'react';
import NotFound from '../notFound/NotFound';
import './MemberTasks.scss';

export default function MemberTasks(props) {
  const { tasks } = props;
  return (
    <div>
      <h4>Assigned tasks</h4>
      {tasks.length ? (
        <div>
          <div className="member__task__list">
            {tasks.map((task, index) => (
              <div key={task.id} className="member__task__list__item">
                <h5 className="member__task__list__item__title">
                  <span>#{++index} - </span>
                  {task.title}
                </h5>
                <p>{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <NotFound message="No assigned tasks found" />
      )}
    </div>
  );
}
