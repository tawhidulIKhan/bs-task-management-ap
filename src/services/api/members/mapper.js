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
  totalTask: member.tasks?.length || 0,
  createdAt: member.created_at,
});

/**
 * Map members array from server to client
 * @param {array} members array
 * @returns {array} mapped members
 */

export const mapMembersFromServerToClient = (members) =>
  members.map((member) => mapMemberFromServerToClient(member));

/**
 * Map members meta from server to client
 * @param {object} meta object
 * @returns {object} mapped meta object
 */

export const mapMeta = (meta) => ({
  currentPage: meta.current_page,
  total: meta.total,
  perPage: meta.per_page,
});
