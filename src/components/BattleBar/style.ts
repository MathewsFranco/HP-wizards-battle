import styled from 'styled-components';
import { StyledButton } from '../Button/style';

export const Container = styled.div`
  height: 250px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary}80;
`;

export const Avatar = styled.img`
  width: auto;
  height: 230px;
`;

export const DuelistContainer = styled.div`
  position: relative;
`;

export const RemoveDuelist = styled(StyledButton)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  position: absolute;
  top: 5px;
  left: 5px;
`;

export const DuelHandleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  * {
    width: fit-content;
  }
`;

export const DuelResultText = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: 20px;
`;
