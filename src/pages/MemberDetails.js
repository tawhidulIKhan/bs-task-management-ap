import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Loading from '../components/loading/Loading';
import MemberForm from '../components/memberForm/MemberForm';
import MemberManager from '../services/api/members/request';

export default function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchMember(id);
  }, [id]);

  const fetchMember = async (id) => {
    try {
      setLoading(true);
      const response = await MemberManager.show({
        id: id
      });
      setMember(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return <Layout>{loading ? <Loading /> : <MemberForm member={member} />}</Layout>;
}
