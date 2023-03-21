import React, { useState, useEffect } from 'react';
import { formatInteger } from 'helpers/formatInteger';
import users from '../../users.json';
import {
  Card,
  BackgrWrap,
  Avatar,
  AvatarWrap,
  AvatarBorder,
  Button,
  Box,
  StatsData,
} from './ProfileList.styled';

const KEY = 'users';
const parsedContacts = JSON.parse(localStorage.getItem(KEY));

export const ProfileList = () => {
  const getUsers = () => {
    return parsedContacts ?? users;
  };

  const [data, setData] = useState(getUsers);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(data));
  }, [data]);

  const handleClick = id => {
    setData(prevData =>
      prevData.map(item => {
        if (item.id === id) {
          const newFollowersCount =
            item.followers + (item.buttonStatus ? -1 : 1);
          console.log(item.buttonStatus);

          return {
            ...item,
            buttonStatus: !item.buttonStatus,
            followers: newFollowersCount >= 0 ? newFollowersCount : 0,
          };
        }
        return item;
      })
    );
  };
  return (
    <>
      {data.map(({ id, user, tweets, followers, avatar, buttonStatus }) => (
        <Card key={id}>
          <BackgrWrap />
          <Box>
            <AvatarBorder>
              <AvatarWrap>
                <Avatar src={avatar} alt="User avatar" />
              </AvatarWrap>
            </AvatarBorder>
          </Box>
          <StatsData>{user}</StatsData>
          <StatsData>Tweets: {tweets}</StatsData>
          <StatsData>Followers: {formatInteger(followers)}</StatsData>
          <Button onClick={() => handleClick(id)} buttonStatus={buttonStatus}>
            {buttonStatus ? 'Following' : 'Follow'}
          </Button>
        </Card>
      ))}
    </>
  );
};
