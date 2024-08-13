import React from 'react';
import { LoaderWrapper, Spinner } from './Loader.style';

export const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};
