import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, userName }) => {
  return (
    <section data-testid="user-profile" className="profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              {avatar ? (
                <img src={avatar} alt={name} />
              ) : (
                <img
                  src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                  alt="empty"
                />
              )}
            </div>
            <p className="user__name">
              {name}
              <span>{`@${userName}`}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
