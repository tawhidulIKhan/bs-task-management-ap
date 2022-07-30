/**
 * Mam singe member from server to client
 * @param {object} object with member info
 * @returns {object} mapped member
 */

export const mapMemberFromServerToClient = (member) => ({
  id: member.id,
  name: member.name,
  email: member.email || '-',
  tasks: member.tasks,
  createdAt: member.created_at,
});

/**
 * Map members array from server to client
 * @param {array} members array
 * @returns {array} mapped members
 */

export const mapMembersFromServerToClient = (members) =>
  members.map((member) => mapMemberFromServerToClient(member));

export const mapMeta = (meta) => ({
  currentPage: meta.current_page,
  total: meta.total,
  perPage: meta.per_page,
});
