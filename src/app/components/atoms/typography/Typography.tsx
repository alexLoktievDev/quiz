import styled from 'styled-components';
import { ITypography } from './Typography.type';

export const Typography = styled.span<ITypography>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  line-height: ${({ lineHeight }) => lineHeight || '1.5'};
  color: ${({ color, theme }) => color || theme.colors.black.black100};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  text-transform: ${({ textTransform }) => textTransform || 'none'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 'normal'};
  font-family: ${({ fontFamily, theme }) => fontFamily || theme.fonts.primary};
  white-space: ${({ whiteSpace }) => whiteSpace || 'normal'};
  text-decoration: ${({ textDecoration }) => textDecoration || 'none'};
`;
