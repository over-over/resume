import styled from 'styled-components';

export const Divider = styled.hr`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;
