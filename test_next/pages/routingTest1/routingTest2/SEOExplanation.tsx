import React, { useState } from 'react';
import SEOIntroduce from '@/components/SEO/SEOIntroduce';
import SEOManual from '@/components/SEO/SEOManual';

function SEOExplain() {
  const [category, setCategory] = useState<string>('introduce');

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
      <div className="mt-16 flex w-full justify-evenly">
        <span className="categoryBtn " onClick={changeIntroduce}>
          SEO란?
        </span>
        <span></span>
        <span className="categoryBtn" onClick={changeManual}>
          SEO방법
        </span>
      </div>
      <main className="mt-4">
        {category === 'introduce' ? <SEOIntroduce /> : <SEOManual />}
      </main>
    </div>
  );
}

export default SEOExplain;
