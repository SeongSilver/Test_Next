import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NextDynamicRoutes() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-xl text-center font-semibold mb-4">
          <Link href="/dweax">파일 기반 라우팅</Link>
        </h1>
        <p className="text-center">
          react에서는 react-router-dom 패키지를 설치하고 App.js에서 라우트
          <br />
          코드를 직접 작성하여 라우팅을 구현하지만, Next.js는 폴더 구조를 통해
          <br />
          라우팅 되야 하는 파일들을 알아서 추론한다
        </p>
      </header>
      <div className="flex justify-evenly">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-xl text-center font-semibold mb-4">
            React_React Route Dom
          </h1>
          <Image
            src="/image/Next.js/routes/reactroute.png"
            alt="리액트 라우팅"
            width={500}
            height={400}
          />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-xl text-center font-semibold mb-4">
            Next.js_파일기반 라우팅
          </h1>
          <Image
            src="/image/Next.js/routes/fileRouting.png"
            alt="파일기반라우팅"
            width={200}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default NextDynamicRoutes;
