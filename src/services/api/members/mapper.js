/**
 * function to format single member item
 * @param {member object} task
 * @returns formatted member obj
 */

export const mapMemberFromServerToClient = (member) => ({
  id: member.id,
  name: member.name,
  email: member.email
})

/**
 * function to map members
 * @param {Members array} tasks 
 * @returns formatted members
 */
export const mapMembersFromServerToClient = (members) => 
  members.map(member => mapMemberFromServerToClient(member))
