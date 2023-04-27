import React, { useState } from 'react';
import SEOIntroduce from '@/components/SEO/SEOManual';
import SEOManual from '@/components/SEO/SEOIntroduce';

function SEOExplain() {
  const [category, setCategory] = useState<string>('introduce');

  const changeIntroduce = () => {
    setCategory('introduce');
  };
  const changeManual = () => {
    setCategory('manual');
  };

  return (
    <div className="w-full h-full p-24">
      <header className="w-full text-3xl font-bold">SEO란?</header>
      <div className="mt-16 flex w-full justify-around">
        <span className="categoryBtn" onClick={changeIntroduce}>
          소개
        </span>
        <span></span>
        <span className="categoryBtn" onClick={changeManual}>
          방법
        </span>
      </div>
      <main className="p-8">
        {category === 'introduce' ? <SEOIntroduce /> : <SEOManual />}
      </main>
    </div>
  );
}

export default SEOExplain;
