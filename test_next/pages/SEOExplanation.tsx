import React, { useState } from 'react';
import SEOIntroduce from '@/components/SEO/SEOIntroduce';
import SEOManual from '@/components/SEO/SEOManual';
import { useRouter } from 'next/router';

function SEOExplain() {
  const [category, setCategory] = useState<string>('introduce');

  const router = useRouter();

  const changeIntroduce = () => {
    setCategory('introduce');
  };
  const changeManual = () => {
    setCategory('method');
  };

  return (
    <div className="w-[100vw] h-[100vh] p-16">
      <header className="w-full text-3xl font-bold text-center">
        SEO(Search Engine Optimization) : 검색 엔진 최적화
      </header>
      <span className="material-symbols-outlined cursor-pointer hover:text-white ease-in-out duration-300" onClick={() => {
                router.back();
              }}>
      arrow_back_ios
      </span>
      <div className="mt-4 flex w-full justify-evenly">
        <span className="categoryBtn " onClick={changeIntroduce}>
          SEO란?
        </span>
        <span></span>
        <span className="categoryBtn" onClick={changeManual}>
          SEO방법
        </span>
      </div>
      <div className="flex justify-center">
        <main className="mt-4">
          {category === 'introduce' ? <SEOIntroduce /> : <SEOManual />}
        </main>
      </div>
    </div>
  );
}

export default SEOExplain;
