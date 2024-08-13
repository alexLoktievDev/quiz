import styled from 'styled-components';
import { IContainer } from './Box.type';

export const Box = styled.div<IContainer>`
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  max-height: ${({ maxHeight }) => maxHeight || 'none'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
  border: ${({ border }) => border || 'none'};
  gap: ${({ gap }) => gap || '0'};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;
