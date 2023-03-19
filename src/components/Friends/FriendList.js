import { FriendListItem } from './FriendListItem';
import { Friends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      <FriendListItem friends={friends} />
    </Friends>
  );
};
