import styled from 'styled-components';
import {
  typography,
  space,
  color,
  TypographyProps,
  SpaceProps,
  TextColorProps,
} from 'styled-system';

type Props = TypographyProps & SpaceProps & TextColorProps;

export const Link = styled.a<Props>`
  color: inherit;
  text-decoration: underline;
  transition: color 0.3s;
  ${props => ({
    ...typography(props),
    ...space(props),
    ...color(props),
  })}

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
