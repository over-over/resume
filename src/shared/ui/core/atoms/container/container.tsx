import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

// TODO: responsive values
export const Container = styled.div<SpaceProps>`
  margin: auto;
  max-width: 800px;
  padding: 0 16px;
  ${space}
`;
