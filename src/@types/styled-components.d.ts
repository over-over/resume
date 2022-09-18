import 'styled-components';
import { CSSProperties } from 'react';

import { TTheme } from '@shared/ui/theme/types';

declare module 'styled-components' {
  interface DefaultTheme extends TTheme {}
}
