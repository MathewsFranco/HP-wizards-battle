import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  margin-top: auto;

  /* Hide arrows */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Hide number input arrows on Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${({ type, theme }) =>
    type === 'checkbox' &&
    css`
      margin: auto;
      height: 20px;
      width: 100%;
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: 5px;
`;
