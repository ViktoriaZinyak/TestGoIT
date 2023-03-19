import styled from '@emotion/styled';

export const Card = styled.div`
  width: 380px;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Wrap = styled.div`
  height: 214px;
  background-image: url('images/bg.png');
  background-size: 200px;
  /* background-repeat: no-repeat; */
  background-position: top 20px left 20px;
  /* border-bottom: 8px solid #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff; */
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
  margin: 0 auto;
  background-color: #f8f8f8;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const Tag = styled.p`
  color: grey;
`;

export const Location = styled.p`
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
`;

export const StatsItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const Quantity = styled.p`
  color: grey;
  margin: 15px 0 0 0;
`;
