import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UersList = ({ users, loading }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section data-testid="user-list" className="users-list">
          {users.map((user) => (
            <User key={user.id} infoUser={user} />
          ))}
        </section>
      )}
    </>
  );
};

export default UersList;
