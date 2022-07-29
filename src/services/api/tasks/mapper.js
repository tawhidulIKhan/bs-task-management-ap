/**
 * function to format single task item
 * @param {Task object} task
 * @returns formatted task obj
 */

import { dateFormat } from "../../../utils/helpers"

export const mapTaskFromServerToClient = (task) => ({
  id: task.id,
  title: task.title,
  createdAt: dateFormat(task.created_at),
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
