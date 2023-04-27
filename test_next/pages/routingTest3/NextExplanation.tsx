import React, { useState } from 'react';
import NextJS from '@/components/Next.js/NextJS';
import NextJS13 from '@/components/Next.js/NextJS13';

function NextExplain() {
  const [category, setCategory] = useState<string>('next');

  const changeNext = () => {
    setCategory('next');
  };
  const changeNext13 = () => {
    setCategory('next13');
  };

  return (
    <div className="w-[100vw] h-[100vh] p-16">
      <header className="w-full text-3xl font-bold text-center">Next.js</header>
      <div className="mt-16 flex w-full justify-evenly">
        <span className="categoryBtn " onClick={changeNext}>
          Next.js
        </span>
        <span></span>
        <span className="categoryBtn" onClick={changeNext13}>
          Next.js v.13 업데이트
        </span>
      </div>
      <main className="mt-4">
        {category === 'next' ? <NextJS /> : <NextJS13 />}
      </main>
    </div>
  );
}

export default NextExplain;
