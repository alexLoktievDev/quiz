import styled, { css } from 'styled-components';
import { HexagonIcon } from '@components/atoms';
import { IHexagonalItem } from './HexagonalItem.type';

export const StyledPolygonButtonWrapper = styled.div`
  width: 100%;
  transition: all 0.5s ease;
`;

export const StyledPolygonButton = styled.label<
  Pick<
    IHexagonalItem,
    | 'justifyContent'
    | 'variant'
    | 'viewableOnly'
    | 'selected'
    | 'isCorrect'
    | 'disabled'
  >
>`
  width: 100%;
  display: inline-flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  min-width: ${({ variant }) => (variant === 'medium' ? '373px' : 'auto')};
  min-height: ${({ variant }) => (variant === 'medium' ? '72px' : 'auto')};
  cursor: ${({ viewableOnly }) => (viewableOnly ? 'default' : 'pointer')};
  color: ${({ selected, disabled, theme }) => {
    if (disabled) {
      return theme.colors.black.black40;
    }
    if (selected) {
      return theme.colors.orange.orange100;
    }
    return theme.colors.black.black100;
  }};
  align-items: center;
  position: relative;
  box-sizing: border-box;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  aspect-ratio: 373 /72;

  &:before,
  &:after {
    display: block;
    width: 100%;
    height: 2.75%;
    background: ${({ selected, theme }) =>
      selected ? theme.colors.orange.orange100 : theme.colors.black.black40};

    content: '';
    position: absolute;
    z-index: 0;
    top: 50%;
  }

  &:before {
    left: 0;
    transform: translateX(-100%) translateY(-50%);
  }

  &:after {
    right: 0;
    transform: translateX(100%) translateY(-50%);
  }
`;

export const StyledHexagonalItemIcon = styled(HexagonIcon)<
  Pick<IHexagonalItem, 'viewableOnly' | 'selected' | 'isCorrect' | 'disabled'>
>`
  width: 100%;
  height: 100%;
  position: absolute;
  fill: ${({ theme }) => theme.colors.white.white100};
  stroke: ${({ selected, disabled, theme }) => {
    if (disabled) {
      return theme.colors.black.black40;
    }

    if (selected) {
      return theme.colors.orange.orange100;
    }

    return theme.colors.black.black40;
  }};
  top: 0;
  left: 0;
  z-index: 1;
`;

export const StyledHexagonalItemLabel = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 0 30px;
  white-space: pre-wrap;
  overflow: hidden;
  text-align: center;
`;

export const StyledHexagonalItemStartElement = styled.span`
  margin-right: 10px;
`;

export const StyledPolygonButtonInput = styled.input<
  Pick<IHexagonalItem, 'viewableOnly' | 'selected' | 'isCorrect' | 'disabled'>
>`
  display: none;

  &:checked + ${StyledPolygonButton} {
    > ${StyledHexagonalItemIcon} {
      ${({ isCorrect, theme }) =>
        isCorrect
          ? css`
              stroke: ${theme.colors.green.green100};
              fill: ${theme.colors.green.green5};
            `
          : css`
              stroke: ${theme.colors.red.red100};
              fill: ${theme.colors.red.red5};
            `}
    }

    &:before,
    &:after {
      ${({ isCorrect, theme }) =>
        isCorrect
          ? css`
              background: ${theme.colors.green.green100};
            `
          : css`
              background: ${theme.colors.red.red100};
            `}
    }
  }
`;
