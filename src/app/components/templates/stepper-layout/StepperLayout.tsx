import { FC } from 'react';
import { IStepperLayout } from '@components/templates/stepper-layout/StepperLayout.type';
import {
  StyledStepperLayout,
  StyledStepperLayoutContent,
  StyledStepperLayoutSidebar,
} from './StepperLayout.style';

export const StepperLayout: FC<IStepperLayout> = ({ children, sidebar }) => {
  return (
    <StyledStepperLayout>
      <StyledStepperLayoutContent>{children}</StyledStepperLayoutContent>

      <StyledStepperLayoutSidebar>{sidebar}</StyledStepperLayoutSidebar>
    </StyledStepperLayout>
  );
};
