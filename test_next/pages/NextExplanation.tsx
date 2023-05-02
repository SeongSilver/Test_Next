import React, { useState } from 'react';
import NextJS from '@/components/Next.js/NextJS';
import NextFunction from '@/components/Next.js/NextFunction';
import NextJS13 from '@/components/Next.js/NextJS13';
import { useRouter } from 'next/router';

function NextExplain() {
  const [category, setCategory] = useState<string>('next');
  const router = useRouter();

  const changeNext = () => {
    setCategory('next');
  };
  const changeNextFunction = () => {
    setCategory('function');
  };
  const changeNext13 = () => {
    setCategory('next13');
  };

  return (
    <div className="w-[100vw] h-[100vh] p-16">
      <header className="w-full text-3xl font-bold text-center">Next.js</header>
      <span
        className="material-symbols-outlined cursor-pointer hover:text-white ease-in-out duration-300"
        onClick={() => {
          router.back();
        }}
      >
        arrow_back_ios
      </span>
      <div className="mt-4 flex w-full justify-evenly">
        <span className="categoryBtn " onClick={changeNext}>
          Next.js란?
        </span>
        <span className="categoryBtn " onClick={changeNextFunction}>
          Next.js의 기능
        </span>
        <span className="categoryBtn" onClick={changeNext13}>
          Next v.13
        </span>
      </div>
      <div className="flex justify-center">
        <main className="mt-4">
          {category === 'next' ? (
            <NextJS />
          ) : category === 'function' ? (
            <NextFunction />
          ) : (
            <NextJS13 />
          )}
        </main>
      </div>
    </div>
  );
}

export default NextExplain;
