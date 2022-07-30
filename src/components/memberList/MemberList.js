import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import endpoints from '../../config/endpoints';
import MemberManager from '../../services/api/members/request';
import NotFound from '../notFound/NotFound';
import Pagination from '../pagination/Pagination';

export default function MemberList() {
  const [members, setMembers] = useState([]);
  const [meta, setMeta] = useState({
    currentPage: 1
  });
  useEffect(() => {
    fetchMembers(meta);
  }, []);

  const fetchMembers = async (request) => {
    try {
      const response = await MemberManager.all(request);
      setMembers(response.data);
      setMeta(response.meta);
    } catch (error) {
      console.log(error);
    }
  };
  const onPaginate = (currentPage) => {
    fetchMembers({ currentPage });
  };

  return (
    <div className="container">
      <div className="page__header">
        <h2 className="page__header__title">All Members</h2>
        <div>
          <Link to={endpoints.MEMBERS_CREATE} className="btn--link">
            Add New member
          </Link>
        </div>
      </div>
      <div className="page__content">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Email</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>
                  <Link to={endpoints.MEMBERS_DETAILS.replace(':id', member.id)}>
                    {member.name}
                  </Link>
                </td>
                <td>{member.email}</td>
                <td>{member.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!members.length ? <NotFound message="No Members Found" /> : null}
        {!members.length ? (
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
