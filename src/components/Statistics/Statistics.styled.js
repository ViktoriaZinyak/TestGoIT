import styled from '@emotion/styled';

export const Section = styled.section`
  width: 300px;
  margin: 20px auto;
  border: 2px solid #d498c6;
  border-radius: 4px;
  background-color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  color: grey;
  text-transform: uppercase;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  width: calc(100% / 4);
  padding: 10px;
  :first-of-type {
    background-color: #33f6ff;
  }
  :nth-of-type(6n + 2) {
    background-color: #9f33ff;
  }
  :nth-of-type(3n) {
    background-color: #ff3368;
  }
  :nth-of-type(4n) {
    background-color: #ff9c33;
  }
  :last-of-type {
    background-color: #7dff33;
  }
`;
