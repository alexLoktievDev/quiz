import { FC } from 'react';
import { StyledButton } from './Button.style';
import { IButton } from './Button.type';

export const Button: FC<IButton> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
