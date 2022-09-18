import styled from 'styled-components';
import { SpaceProps, space } from 'styled-system';

export const List = styled.ul<SpaceProps>`
  list-style: none;
  ${space}

  & > li:nth-last-child(n + 2) {
    margin-bottom: 16px;
  }
`;
