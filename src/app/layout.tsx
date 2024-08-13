'use client';

import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Loader } from '@components/atoms';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Test app</title>
        <meta name="description" content="Test app" />
        <link
          rel="icon"
          href="https://makeheadway.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd82d4167-731e-4eeb-ac9d-5cbd10ae7fa9%2FGroup_275_(1).png?table=block&id=b509bb00-a991-4435-bde3-fc9da0fa83de&spaceId=e33f5907-218d-40df-b055-70850a3fb8c2&width=40&userId=&cache=v2"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={inter.className}>{children}</div>
      )}
    </>
  );
}
