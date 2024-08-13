import { FC, ReactNode } from 'react';
import { InfoScreenLayout } from '@components/templates/info-screen-layout';
import { TStepperItem } from '@helpers/types/globalTypes';
import { StyledFinalScreenTypography } from '@components/organisms/final-screen/FinalScreen.style';
import { ITypography } from '@components/atoms';

const FinalScreenTypography: FC<ITypography> = () => (
  <StyledFinalScreenTypography>Total score</StyledFinalScreenTypography>
);

export const FinalScreen: FC<TStepperItem> = ({
  questions,
  reset,
  questionStepperInfo,
}) => {
  return (
    <InfoScreenLayout
      header={FinalScreenTypography as () => ReactNode}
      text={`$${questions[questionStepperInfo.currentStep - (questionStepperInfo.currentStep === questions.length - 1 ? 0 : 1)]?.score || 0} earned`}
      buttonProps={{
        children: 'Try again',
        onClick: () => {
          questionStepperInfo.reset();
          reset();
        },
      }}
    />
  );
};
