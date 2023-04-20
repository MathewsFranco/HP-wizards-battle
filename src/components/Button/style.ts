import styled, { css } from 'styled-components';

type ButtonProps = {
  variant?: 'primary' | 'outline';
};

export const StyledButton = styled.button<ButtonProps>`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  transition: 200ms ease-in-out;

  background-color: ${({ theme }) => theme.colors.primary};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
  ${({ variant, theme }) =>
    variant === 'outline' &&
    css`
      color: ${theme.colors.primary};
      background-color: transparent;
      border: 2px solid ${theme.colors.primary};
    `}
`;
