import { FC } from 'react';
import { IQuestionsList } from '@helpers/types/globalTypes';
import {
  StyledSidebarContentNavHexagonalItem,
  StyledSidebarContent,
  StyledSidebarWrapper,
} from './Sidebar.style';

export const Sidebar: FC<
  IQuestionsList & {
    currentScoreQuestion: IQuestionsList['questions'][number]['score'];
    isMobileMenuOpen?: boolean;
  }
> = ({ isMobileMenuOpen, questions, currentScoreQuestion, ...rest }) => {
  const reversedQuestions = [...questions]?.reverse();

  return (
    <StyledSidebarWrapper isMobileMenuOpen={isMobileMenuOpen} {...rest}>
      <StyledSidebarContent
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
      >
        {reversedQuestions?.map(({ score }) => (
          <StyledSidebarContentNavHexagonalItem
            key={score}
            variant="small"
            disabled={score < currentScoreQuestion}
            selected={score === currentScoreQuestion}
            viewableOnly
            label={score.toString()}
          />
        ))}
      </StyledSidebarContent>
    </StyledSidebarWrapper>
  );
};
