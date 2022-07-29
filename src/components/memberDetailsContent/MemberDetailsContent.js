import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MemberManager from '../../services/api/members/request';
import MemberForm from '../memberForm/MemberForm';

export default function MemberDetailsContent() {
  const {id} = useParams();
  const [member, setMember] = useState(null)
  useEffect(() => {
    fetchMember(id)
  }, [id])
  
  const fetchMember = async (id) => {
    try {
      const response = await MemberManager.show({
        id: id
      });
      setMember(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {member ? <MemberForm member={member} /> : null}
    </div>
  )
}
