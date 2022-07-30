/**
 * Map single task object from server to client
 * @param {object} task object
 * @returns {object} mapped task object
 */

export const mapTaskFromServerToClient = (task) => ({
  id: task.id,
  title: task.title,
  description: task.description,
  createdAt: task.created_at,
  assignedTo: task.assigned?.id,
  assignedMember: task.assigned?.name,
});

/**
 * Map tasks array from server to client
 * @param {array} tasks array
 * @returns {array} mapped tasks array
 */

export const mapTasksFromServerToClient = (tasks) =>
  tasks.map((task) => mapTaskFromServerToClient(task));

export const mapMeta = (meta) => ({
  currentPage: meta.current_page,
  total: meta.total,
  perPage: meta.per_page,
});
