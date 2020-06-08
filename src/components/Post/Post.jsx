import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <article className="post" data-testid="post">
      {userInfo && (
        <header className='post__header'>
          <div className='user'>
            <Link className='user__thumb' to='/users/blackphanter'>
              <img src={userInfo.avatar} alt={userInfo.name} />
            </Link>
            <Link className='user__name' to={`/users/${userInfo.name}`}>
              {userInfo.name}
            </Link>
          </div>
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className='post__context'
          >
            <span className={isFollowing ? 'follow-btn is-following' : 'follow-btn'}>
              {isFollowing ? 'Seguindo' : 'Seguir'}
            </span>
          </button>
        </header>
      )}

      <figure className='post__figure'>
        <img src={postInfo.imageUrl} alt={postInfo.id} />
      </figure>
      {userInfo && (
        <nav className="post__controls">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="post__control"
          >
            <i
              className={isLiked ? "far fa-heart fas fa-heart" : "far fa-heart"}
            ></i>
          </button>
          <div className="post__status">
            <div className="user">
              <span>
                curtido por <Link to="/">Santino Rowe</Link>
                {isLiked ? " e outras pessoas" : " e outra pessoa"}
                <Link to="/"></Link>
              </span>
            </div>
          </div>
        </nav>
      )}
    </article>
  );
};

export default Post;
