import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import endpoints from '../../config/endpoints';
import MemberManager from '../../services/api/members/request';
import Loading from '../loading/Loading';
import NotFound from '../notFound/NotFound';
import Pagination from '../pagination/Pagination';

export default function MemberList() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({
    currentPage: 1,
  });
  useEffect(() => {
    fetchMembers(meta);
  }, []);

  const fetchMembers = async (request) => {
    try {
      setLoading(true);
      const response = await MemberManager.all(request);
      setMembers(response.data);
      setMeta(response.meta);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
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
        {loading ? (
          <Loading />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Number of task assigned</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>
                    <Link
                      to={endpoints.MEMBERS_DETAILS.replace(':id', member.id)}
                    >
                      {member.name}
                    </Link>
                  </td>
                  <td>{member.totalTask}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {!members.length && !loading ? (
          <NotFound message="No Members Found" />
        ) : null}
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
