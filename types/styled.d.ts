import 'styled-components';
import { theme } from '../src/app/helpers/configs/styles/registry';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
