export interface ITypography {
  fontSize?: string;
  fontWeight?: number | string;
  lineHeight?: string;
  color?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  margin?: string;
  padding?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  letterSpacing?: string;
  fontFamily?: string;
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  textDecoration?: string;
}
