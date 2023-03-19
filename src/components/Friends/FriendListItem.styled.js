import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const FriendMarker = styled.span`
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.status ? 'green' : 'red';
  }};
`;

export const Img = styled.img`
  display: block;
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-size: 16px;
`;
