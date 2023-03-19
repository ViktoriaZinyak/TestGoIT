import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 2px solid #d498c6;
  border-radius: 4px;
  background-color: #f0f0f0;
`;

export const Wrap = styled.div`
  padding: 20px;
  border-bottom: 2px solid #d498c6;
  background-color: white;
  text-align: center;
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
  fonh-size: 20px;
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
