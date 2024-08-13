import { forwardRef } from 'react';
import {
  StyledHexagonalItemIcon,
  StyledHexagonalItemLabel,
  StyledHexagonalItemStartElement,
  StyledPolygonButton,
  StyledPolygonButtonInput,
  StyledPolygonButtonWrapper,
} from './HexagonalItem.style';
import { IHexagonalItem } from './HexagonalItem.type';

export const HexagonalItem = forwardRef<HTMLInputElement, IHexagonalItem>(
  (
    {
      label,
      hexagonIconProps,
      startElement,
      variant,
      id,
      viewableOnly,
      justifyContent = 'center',
      name,
      multiple = false,
      selected,
      disabled,
      isCorrect,
      onChange,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledPolygonButtonWrapper className={className}>
        {!viewableOnly && (
          <StyledPolygonButtonInput
            id={id}
            type={multiple ? 'checkbox' : 'radio'}
            name={name}
            {...rest}
            ref={ref}
            onChange={(event) => {
              if (!event.target.checked) {
                event.preventDefault();
              }
              onChange?.(event);
            }}
            isCorrect={isCorrect}
          />
        )}

        <StyledPolygonButton
          htmlFor={id}
          justifyContent={justifyContent}
          variant={variant}
          disabled={disabled}
          viewableOnly={viewableOnly}
          selected={selected}
          isCorrect={isCorrect}
        >
          <StyledHexagonalItemIcon
            {...hexagonIconProps}
            isCorrect={isCorrect}
            selected={selected}
            disabled={disabled}
          />

          <StyledHexagonalItemLabel>
            {startElement && (
              <StyledHexagonalItemStartElement>
                {startElement}
              </StyledHexagonalItemStartElement>
            )}
            {label}
          </StyledHexagonalItemLabel>
        </StyledPolygonButton>
      </StyledPolygonButtonWrapper>
    );
  },
);
