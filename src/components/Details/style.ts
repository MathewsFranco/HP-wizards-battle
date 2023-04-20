import styled, { css } from 'styled-components';

export const Container = styled.div<{ house: House }>`
  ${({ theme, house }) => css`
    max-width: 500px;
    margin: 20px auto;
    display: flex;
    gap: 25px;
    padding: 20px;
    background-color: ${theme.colors[house]}10;
    border: 2px solid ${theme.colors[house]};
    border-radius: 5px;
    box-shadow: ${theme.boxShadow.large};
  `}
`;

export const Avatar = styled.img`
  width: 250px;
  height: 400px;
  object-fit: cover;
`;

export const CharInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
    margin: 10px 0;
  `}
`;
