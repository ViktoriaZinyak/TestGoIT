import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendMarker,
  Img,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(friend => {
    return (
      <FriendItem key={friend.id}>
        <FriendMarker status={friend.isOnline}></FriendMarker>
        <Img src={friend.avatar} alt="User avatar" width="48" />
        <FriendName>{friend.name}</FriendName>
      </FriendItem>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
