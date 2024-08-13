import { IUseStepperReturn } from '@helpers/hooks';

export interface Question {
  question: string;
  answers: { text: string; isCorrect: boolean }[];
  score: number;
}

export interface IQuestionsList {
  questions: Question[];
}

export type TStepperItem = IUseStepperReturn &
  IQuestionsList & { questionStepperInfo: IUseStepperReturn };
