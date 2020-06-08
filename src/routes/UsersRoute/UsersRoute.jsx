import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users"
      );
      const data = await response.json();
      setListUsers(data);
      setLoadingUsers(false);
    };
    getUsers();
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={listUsers} loadingUsers={loadingUsers} />
    </div>
  );
};

export default UsersRoute;
