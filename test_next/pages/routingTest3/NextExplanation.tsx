import React, { useState } from 'react';
import NextJS from '@/components/Next.js/NextJS';
import NextJS13 from '@/components/Next.js/NextJS13';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function NextExplain() {
  const [category, setCategory] = useState<string>('next');
  const router = useRouter();

  const changeNext = () => {
    setCategory('next');
  };
  const changeNext13 = () => {
    setCategory('next13');
  };

  return (
    <div className="w-[100vw] h-[100vh] p-16">
      <header className="w-full text-3xl font-bold text-center">Next.js</header>
      <span className="material-symbols-outlined cursor-pointer hover:text-white ease-in-out duration-300" onClick={() => {
                router.back();
              }}>
      arrow_back_ios
      </span>
      <div className="mt-4 flex w-full justify-evenly">
        <span className="categoryBtn " onClick={changeNext}>
          Next.js
        </span>
        <span></span>
        <span className="categoryBtn" onClick={changeNext13}>
          Next.js v.13 업데이트
        </span>
      </div>
      <div className="flex justify-center">
        <main className="mt-4">
          {category === 'next' ? <NextJS /> : <NextJS13 />}
        </main>
      </div>
    </div>
  );
}

export default NextExplain;
