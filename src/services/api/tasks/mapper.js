/**
 * function to format single task item
 * @param {Task object} task
 * @returns formatted task obj
 */

export const mapTaskFromServerToClient = (task) => ({
  id: task.id,
  title: task.title,
  createdAt: task.createdAt,
  assingedTo: task.assingedTo
})

/**
 * function to map tasks
 * @param {Tasks array} tasks 
 * @returns formatted tasks
 */
export const mapTasksFromServerToClient = (tasks) => 
  tasks.map(task => mapTaskFromServerToClient(task))