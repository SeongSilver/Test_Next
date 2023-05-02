import React from 'react';
import Image from 'next/image';

function Nuxt() {
  return (
    <div>
      <header>
        <h1 className="text-xl text-center font-semibold mb-4">Nuxt.js</h1>
      </header>
      <div className="flex flex-col">
        <div className="flex items-center justify-center w-full space-x-6">
          <Image
            src="/image/logo/nextjs.png"
            alt="nextjs.png"
            width={350}
            height={300}
          />
          <Image
            src="/image/logo/nuxt.png"
            alt="nextjs.png"
            width={500}
            height={100}
          />
        </div>
        <ul className="flex flex-col justify-center w-full items-center mb-6">
          <li className="font-bold text-2xl">
            SSR, SSG를 지원하는 메타 프레임워크
          </li>
          <li className="text-xl">next.js - react기반</li>
          <li className="text-xl">nuxt - vue기반</li>
        </ul>
        <p className="flex justify-center items-center text-center text-xl">
          react와 vue <strong>생태계의 차이</strong>,{' '}
          <strong>상태관리 방법</strong>,<strong>코드분할방법</strong>의 차이가
          있지만 <strong>같은 피쳐</strong>를 공유
        </p>
      </div>
    </div>
  );
}

export default Nuxt;
