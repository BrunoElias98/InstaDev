import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser })  => {
  return (
    <article data-testid="user" className="post">
      <header className="post__header">
        <Link to={`users/${infoUser.name}`} className="user">
          <div className="user__thumb">
            <img
              src={
                infoUser.avatar
                  ? infoUser.avatar
                  : "https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
              }
              alt={infoUser.name}
            />
          </div>
          <div className="user__name">{infoUser.name}</div>
        </Link>
      </header>
    </article>
  )
};

export default User;
