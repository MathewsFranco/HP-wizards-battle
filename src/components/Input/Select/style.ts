import styled from 'styled-components';

export const StyledSelect = styled.select`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  margin-top: auto;

  &:hover {
    cursor: pointer;
  }
`;
