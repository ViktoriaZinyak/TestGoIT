import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  width: 700px;
  border: 2px solid #dcdcdc;
  border-radius: 4px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
`;

export const Th = styled.th`
  height: 50px;
  border: 1px solid #dcdcdc;
  background-color: #33f6ff;
  color: #fff;
`;

export const Tr = styled.tr`
  height: 50px;
  :nth-of-type(2n) {
    background-color: #f0f0f0;
  }
`;

export const Td = styled.td`
  border: 1px solid #dcdcdc;
  padding: 0;
`;
