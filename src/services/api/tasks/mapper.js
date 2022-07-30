/**
 * function to format single task item
 * @param {Task object} task
 * @returns formatted task obj
 */

export const mapTaskFromServerToClient = (task) => ({
  id: task.id,
  title: task.title,
  description: task.description,
  createdAt: task.created_at,
  assignedTo: task.assigned?.id,
  assignedMember: task.assigned?.name
})

/**
 * function to map tasks
 * @param {Tasks array} tasks 
 * @returns formatted tasks
 */
export const mapTasksFromServerToClient = (tasks) => 
  tasks.map(task => mapTaskFromServerToClient(task))

export const mapMeta = (meta) => ({
   currentPage: meta.current_page,
   total: meta.total,
   perPage: meta.per_page,
})
