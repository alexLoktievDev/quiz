'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export const theme = {
  fonts: {
    primary: "'Inter', 'Helvetica', 'Arial', sans-serif",
    weights: {
      regular: 400,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  colors: {
    orange: {
      orange120: '#E87928',
      orange100: '#FF8B37',
      orange80: '#FFAC70',
      orange5: '#FFF3EB',
    },
    green: {
      green100: '#47D867',
      green5: '#E6FAEA',
    },
    red: {
      red100: '#EC6259',
      red5: '#FDEEED',
    },
    black: {
      black100: '#1C1C21',
      black40: '#D0D0D8',
      black5: '#F5F5F7',
    },
    white: {
      white100: '#FFFFFF',
    },
  },
};

const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return styles;
  });

  if (typeof window !== 'undefined') return children;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
