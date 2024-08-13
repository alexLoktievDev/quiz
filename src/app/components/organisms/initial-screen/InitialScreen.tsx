import { FC } from 'react';
import { IUseStepperReturn } from '@helpers/hooks';

import { InfoScreenLayout } from '@components/templates/info-screen-layout';

export const InitialScreen: FC<IUseStepperReturn> = ({ goToNext }) => {
  return (
    <InfoScreenLayout
      hasTriangleBackground
      text="Who wants to be a millionaire?"
      buttonProps={{
        children: 'Start',
        onClick: goToNext,
      }}
    />
  );
};
