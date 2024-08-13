import { CSSProperties } from 'react';

export interface IContainer {
  display?: CSSProperties['display'];
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  padding?: CSSProperties['padding'];
  margin?: CSSProperties['margin'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  maxWidth?: CSSProperties['maxWidth'];
  maxHeight?: CSSProperties['maxHeight'];
  backgroundColor?: CSSProperties['backgroundColor'];
  borderRadius?: CSSProperties['borderRadius'];
  boxShadow?: CSSProperties['boxShadow'];
  border?: CSSProperties['border'];
  gap?: CSSProperties['gap'];
  color?: CSSProperties['color'];
  fontSize?: CSSProperties['fontSize'];
  textAlign?: CSSProperties['textAlign'];
}
