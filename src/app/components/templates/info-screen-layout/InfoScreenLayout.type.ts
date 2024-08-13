import { IButton } from '@components/atoms';
import { ReactNode } from 'react';

export type TInfoScreenLayout = {
  buttonProps: IButton;
  text: string;
  hasTriangleBackground?: boolean;
  header?: () => ReactNode;
};
