import { FC } from 'react';
import { FinalScreen, InitialScreen, QuizScreen } from '@components/organisms';
import { useStepper } from '@helpers/hooks';
import { GetStaticProps } from 'next';
import { IQuestionsList, TStepperItem } from '@helpers/types/globalTypes';

const stepperConfig: {
  component: FC<TStepperItem>;
}[] = [
  {
    component: InitialScreen,
  },
  {
    component: QuizScreen,
  },
  {
    component: FinalScreen,
  },
];

const Home: FC<IQuestionsList> = ({ questions }) => {
  const stepperInfo = useStepper({
    initialStep: 0,
    totalSteps: stepperConfig.length,
  });

  const questionStepperInfo = useStepper({
    initialStep: 0,
    totalSteps: questions.length,
  });

  const Component = stepperConfig[stepperInfo.currentStep].component;

  return (
    <main>
      <Component
        {...stepperInfo}
        questionStepperInfo={questionStepperInfo}
        questions={questions}
      />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_URL}`}/questions.json`,
  );
  const data = await res.json();

  return {
    props: {
      questions: data.questions,
    },
  };
};

export default Home;
