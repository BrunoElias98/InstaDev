import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState('');
  const [story, setStory] = useState({});
  const [user, setUser] = useState({});

  const handleStorieClick = (userId) => {
    stories.map((storie) => {
      if (storie.userId === userId) {
        const user = getUserHandler(storie.userId);

        setStory(storie);
        setUser(user);
      }
      return storie;
    });
    setShowStory(true);
  };
  
  const handleClose = () => setShowStory(false);

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((Stories) => {
            const user = getUserHandler(Stories.userId);
            return (
              <button
                key={Stories.id}
                onClick={() => handleStorieClick(Stories.userId)}
                className="user__thumb user__thumb--hasNew"
              >
                <div className="user__thumb__wrapper">
                  {user ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <img
                      src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                      alt="empty"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>
      {showStory && <Story story={story} user={user} handleClose={handleClose} />}
    </React.Fragment>
  );
};

export default Stories;
