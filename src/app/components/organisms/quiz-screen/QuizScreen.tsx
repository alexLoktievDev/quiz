import { FC, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StepperLayout } from '@components/templates/stepper-layout';
import { Box, BurgerIcon, HighlightedTypography } from '@components/atoms';
import { TStepperItem } from '@helpers/types/globalTypes';
import { CrossIcon } from '@storybook/icons';
import { Sidebar } from '../sidebar';
import {
  StyledQuizScreenQuestions,
  StyledQuizScreenQuestionsExplanation,
  StyledQuizScreenQuestionsHexagonalItem,
  StyledQuizScreenQuestionsTypography,
  StyledQuizScreenScreenBurger,
} from './QuizScreen.style';

type FormValues = {
  [key: string]: string | string[];
};

export const QuizScreen: FC<TStepperItem> = ({
  questions,
  goToNext,
  questionStepperInfo,
}) => {
  const { register, watch, setValue } = useForm<FormValues>();
  const [isMobileMenuOpen, openMobileMenu] = useState(false);

  const currentQuestion = questions[questionStepperInfo.currentStep];
  const correctAnswers = currentQuestion.answers.filter(
    (item) => item.isCorrect,
  );

  // Watch the selected answer for the current question
  const selectedAnswer = watch(currentQuestion.score.toString());
  const selectedAnswerArray = useMemo(() => {
    return selectedAnswer && Array.isArray(selectedAnswer)
      ? selectedAnswer
      : [selectedAnswer];
  }, [selectedAnswer]);

  // Handle the selection and deselection logic
  const handleSelection = (value: string) => {
    if (selectedAnswerArray.includes(value)) {
      // Deselect the value
      setValue(
        currentQuestion.score.toString(),
        selectedAnswerArray.filter((item) => item !== value),
      );
    } else {
      // Select the value
      setValue(
        currentQuestion.score.toString(),
        correctAnswers.length > 1 ? [...selectedAnswerArray, value] : value, // Single selection for radio buttons
      );
    }
  };

  // Forwards to the next screen or question
  useEffect(() => {
    const isCorrect =
      !selectedAnswer ||
      selectedAnswerArray.every((selected) =>
        correctAnswers.some((correct) => correct.text === selected),
      );

    if (!isCorrect) {
      setTimeout(goToNext, 500);
    } else if (
      selectedAnswerArray.length === correctAnswers.length &&
      correctAnswers.every((correctAnswer) =>
        selectedAnswerArray.includes(correctAnswer.text),
      )
    ) {
      if (questionStepperInfo.currentStep === questions.length - 1) {
        setTimeout(goToNext, 500);
      } else {
        questionStepperInfo.goToNext();
      }
    }
  }, [
    selectedAnswer,
    correctAnswers,
    goToNext,
    questionStepperInfo.currentStep,
    questions.length,
    selectedAnswerArray,
    questionStepperInfo,
  ]);

  return (
    <StepperLayout
      sidebar={
        <Sidebar
          isMobileMenuOpen={isMobileMenuOpen}
          currentScoreQuestion={currentQuestion.score}
          questions={questions}
        />
      }
    >
      <StyledQuizScreenScreenBurger
        onClick={() => {
          openMobileMenu((prevState) => !prevState);
        }}
      >
        {!isMobileMenuOpen ? <BurgerIcon /> : <CrossIcon />}
      </StyledQuizScreenScreenBurger>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <StyledQuizScreenQuestionsTypography>
          {currentQuestion.question}

          <StyledQuizScreenQuestionsExplanation>
            {correctAnswers.length > 1 && (
              <div>
                <strong>(Multiple answers)</strong>
              </div>
            )}

            <div>
              <strong>
                (Correct answers:{' '}
                {correctAnswers.map((item) => item.text).join(', ')})
              </strong>
            </div>
          </StyledQuizScreenQuestionsExplanation>
        </StyledQuizScreenQuestionsTypography>

        <StyledQuizScreenQuestions>
          {currentQuestion.answers.map(({ text }, index) => {
            const isCorrect = correctAnswers.some((item) => item.text === text);
            const isSelected = Array.isArray(selectedAnswer)
              ? selectedAnswer.includes(text)
              : selectedAnswer === text;

            return (
              <Box
                key={String.fromCharCode(65 + index)}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <StyledQuizScreenQuestionsHexagonalItem
                  justifyContent="flex-start"
                  multiple={correctAnswers.length > 1}
                  id={text}
                  label={text}
                  value={text}
                  isCorrect={isCorrect}
                  startElement={
                    <HighlightedTypography>
                      {String.fromCharCode(65 + index)}
                    </HighlightedTypography>
                  }
                  checked={isSelected}
                  disabled={!isCorrect && isSelected}
                  onClick={() => handleSelection(text)}
                  {...register(currentQuestion.score.toString())}
                />
              </Box>
            );
          })}
        </StyledQuizScreenQuestions>
      </Box>
    </StepperLayout>
  );
};
