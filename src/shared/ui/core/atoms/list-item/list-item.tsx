import styled from 'styled-components';

export const ListItem = styled.li`
  position: relative;
  list-style: none;
  padding-left: 16px;

  &::before {
    position: absolute;
    left: 0;
    top: 8px;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent
      ${({ theme }) => theme.palette.primary.main};
  }
`;
