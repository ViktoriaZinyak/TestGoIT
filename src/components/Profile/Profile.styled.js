import styled from '@emotion/styled';
import imageBg from '../../images/bg.png';
import logo from '../../images/goit.png';

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

export const BackgrWrap = styled.div`
  height: 214px;
  background-image: url(${imageBg}), url(${logo});
  background-size: 308px, 76px;
  background-repeat: no-repeat;
  background-position: center, top 20px left 20px;
  /* border-bottom: 8px solid #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff; */
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const AvatarWrap = styled.div`
  width: 61px;
  height: 61px;
  background-color: #5736a2;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 50%;
`;

export const Stats = styled.div`
  padding-top: 62px;
  text-align: center;
`;

export const StatsData = styled.p`
  color: #ebd8ff;
  margin: 0;
  /* font-family: 'Montserrat'; */
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;
