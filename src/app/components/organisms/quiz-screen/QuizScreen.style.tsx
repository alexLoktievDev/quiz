import styled from 'styled-components';
import { HexagonalItem, IHexagonalItem } from '@components/molecules';
import { Box, Typography } from '@components/atoms';
import { forwardRef } from 'react';
import { resolutionSizes } from '@helpers/styles';

export const StyledQuizScreenScreenBurger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${resolutionSizes.tablet}) {
    display: block;
    position: absolute;
    z-index: 4;
    top: 20px;
    right: 20px;
  }
`;

export const StyledQuizScreenQuestionsHexagonalItem = styled(
  forwardRef<HTMLInputElement, IHexagonalItem>((props, ref) => (
    <HexagonalItem {...props} ref={ref} />
  )),
)`
  width: min(100%, 421px);
  min-width: auto;
  min-height: auto;
`;

export const StyledQuizScreenQuestionsTypography = styled(Typography)`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};

  @media (max-width: ${resolutionSizes.tablet}) {
    margin: auto;
    font-size: 18px;
    padding: 20px;
    line-height: 37.12px;

    &,
    & * {
      text-align: center;
    }
  }
`;
export const StyledQuizScreenQuestionsExplanation = styled(Box)`
  margin-top: 40px;

  @media (max-width: ${resolutionSizes.tablet}) {
    margin-top: 20px;
  }
`;

export const StyledQuizScreenQuestions = styled.section`
  overflow: hidden;

  @media (max-width: ${resolutionSizes.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 40px;
  }

  @media (min-width: ${resolutionSizes.tablet}) {
    display: grid;
    margin-top: auto;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(48px, auto);
    grid-row-gap: 32px;

    > * {
      overflow: hidden;
    }

    > *:nth-child(odd),
    > *:nth-child(even) {
      height: 100%;
      overflow: hidden;
    }
  }
`;
