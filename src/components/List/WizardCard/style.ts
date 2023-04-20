import styled, { css } from 'styled-components';

export const Container = styled.div<{ isActive: boolean }>`
  transition: 0.3s;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.colors.secondary}50;
    `}
  display: flex;
  flex-direction: column;
  width: 152px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;
`;

export const WizardName = styled.h1`
  margin: auto;
  text-align: center;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
