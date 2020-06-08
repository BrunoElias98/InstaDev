import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div data-testid="posts" className="container">
    <section className="feed">
      {posts &&
        posts.map((posts) => {
          const user = getUserHandler(posts.userId);
          return <Post key={posts.id} userInfo={user} postInfo={posts} />;
        })}
    </section>
  </div>
);

export default Posts;
