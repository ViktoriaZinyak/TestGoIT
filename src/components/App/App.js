import user from '../../user.json';

import { Profile } from '../Profile/Profile';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </Container>
  );
};
