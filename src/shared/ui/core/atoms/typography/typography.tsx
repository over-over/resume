import styled from 'styled-components';
import {
  typography,
  space,
  color,
  TypographyProps,
  SpaceProps,
  TextColorProps,
} from 'styled-system';

import { TTypographyVariant } from '@shared/ui/theme/types';

type Props = {
  variant: TTypographyVariant;
} & TypographyProps &
  SpaceProps &
  TextColorProps;

export const Typography = styled.p<Props>(props => ({
  color: props.theme.palette.text.primary,
  ...props.theme.typography[props.variant],
  ...typography(props),
  ...space(props),
  ...color(props),
}));
