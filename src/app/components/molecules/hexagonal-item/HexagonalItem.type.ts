import { IHexagonIcon } from '@components/atoms';
import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { Either } from '@helpers/types';

export type IHexagonalItem = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'children'
> & {
  label: string;
  hexagonIconProps?: Omit<IHexagonIcon, 'ref'>;
  variant?: 'small' | 'medium';
  multiple?: boolean;
  justifyContent?: CSSProperties['justifyContent'];
  startElement?: ReactNode;
  disabled?: boolean;
} & Either<
    {
      viewableOnly?: true;
      selected?: boolean;
    },
    {
      id: string;
      name: string;
      viewableOnly?: false;
      isCorrect?: boolean;
    }
  >;
