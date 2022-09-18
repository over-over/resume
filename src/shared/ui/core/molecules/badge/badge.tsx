import { ReactNode } from 'react';
import styled from 'styled-components';
import { SpaceProps, space } from 'styled-system';

import { Typography } from '../../atoms';

const Wrapper = styled.div<{ $color: 'primary' | 'secondary' } & SpaceProps>`
  display: inline-flex;
  padding: 4px 16px;
  border-radius: 100px;
  background-color: ${({ theme, $color }) => theme.palette[$color].light};
  color: ${({ theme, $color }) => theme.palette[$color].main};
  ${space}

  & > ${Typography}::before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    vertical-align: middle;
    margin-right: 8px;
    background-color: currentColor;
  }
`;

type Props = {
  color?: 'primary' | 'secondary';
  children: ReactNode;
} & SpaceProps;

export const Badge = ({ children, color = 'primary', ...rest }: Props) => {
  return (
    <Wrapper $color={color} {...rest}>
      {typeof children === 'string' ? (
        <Typography variant="h6" color="currentColor">
          {children}
        </Typography>
      ) : (
        children
      )}
    </Wrapper>
  );
};
