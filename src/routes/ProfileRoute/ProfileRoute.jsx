import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';
import { useParams } from "react-router-dom";

const ProfileRoute = () => {
  const [loadingUserPosts, setLoadingUserPosts] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const { userName } = useParams();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://5e7d0266a917d70016684219.mockapi.io/api/v1/users"
      );
      const data = await response.json();
      setUsersList(data);
      setLoadingUserPosts(false);
    };
    getUsers();
  }, []);

  useEffect(() => {
    usersList.map((userValue) => {
      if (userValue.name === userName) {
        setUserInfo(userValue);
        const getUserPosts = async () => {
          const response = await fetch(
            `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${userValue.id}/posts`
          );
          const data = await response.json();
          setUserPosts(data);
        };
        getUserPosts();
      }
      return userValue;
    });
  }, [userName, usersList]);

  return (
    <div data-testid="profile-route">
      {loadingUserPosts ? (
        <Loading />
      ) : (
        <>
          <UserProfile
            avatar={userInfo.avatar}
            name={userInfo.name}
            username={userInfo.username}
          />
          <UserPosts posts={userPosts} />
        </>
      )}
    </div>
  );
};

export default ProfileRoute;
