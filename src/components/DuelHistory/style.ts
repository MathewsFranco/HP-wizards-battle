import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
`;

export const HistoryText = styled.span<{ isWinner: boolean }>`
  ${({ theme, isWinner }) => css`
    font-size: ${theme.fontSizes.medium};
    ${isWinner &&
    css`
      color: ${theme.colors.success};
    `}
  `}
`;
