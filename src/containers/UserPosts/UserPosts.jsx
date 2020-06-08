import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => {
  return (
    <div className="container" data-testid="user-posts">
      <section className={"user-posts"}>
        {posts.length > 0 ? (posts.map((posts) => (
          <Post key={posts.id} postInfo={posts} />
        ))) : (
          <div className="no-posts">
            <span className="no-posts__content">Não há publicações do usuário</span>
            <span className="no-posts__emoji" role="img" aria-label="No posts" >&#128549;</span>
          </div>
        )}
      </section>
    </div>
  )
};
export default UserPosts;
