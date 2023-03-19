import PropTypes from 'prop-types';
import avatar from '../../images/Hansel.png';
import {
  Card,
  BackgrWrap,
  Avatar,
  Stats,
  StatsItem,
  Label,
  Quantity,
  AvatarWrap,
  AvatarBorder,
  Box,
  StatsData,
} from './Profile.styled';

export const Profile = ({ username, tag, location, stats }) => {
  return (
    <Card>
      <BackgrWrap></BackgrWrap>
      <Box>
        <AvatarBorder>
          <AvatarWrap>
            <Avatar src={avatar} alt="User avatar" />
          </AvatarWrap>
        </AvatarBorder>
      </Box>

      <Stats>
        <StatsData> 777 tweets</StatsData>
        <StatsData> 100,500 Followers</StatsData>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
