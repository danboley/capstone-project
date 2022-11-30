import React, { useState, UseEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function UserDetailPage() {
  const [users, setUsers] = useState([])
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users)

  return (
    <div>UserDetailPage</div>
  );
}

export default UserDetailPage;