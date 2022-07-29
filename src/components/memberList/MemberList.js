import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import endpoints from '../../config/endpoints';
import MemberManager from '../../services/api/members/request';

export default function MemberList() {
  const [members, setMembers] = useState([])
  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await MemberManager.all();
      setMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <div className='page__header'>
        <h2 className='page__header__title'>All Members</h2>
        <div>
          <Link to="/tasks/create" className='btn--link'>Add New member</Link>
        </div>
      </div>
      <div className='page__content'>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Email</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
            <tr key={member.id}>
              <td>
                <Link to={endpoints.MEMBERS_DETAILS.replace(":id", member.id)}>{member.name}</Link>
              </td>
              <td>{member.email}</td>
              <td>{member.createdAt}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
