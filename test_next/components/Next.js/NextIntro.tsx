import React from 'react';
import Image from 'next/image';

function NextIntro() {
  return (
    <div className="w-full h-full flex justify-evenly items-center">
      <div className="flex items-center">
        <Image
          src="/image/Next.js/nextjs.png"
          alt="nextjs.png"
          width={400}
          height={300}
        />
      </div>
      <div>
        <p>
          서버 사이드 렌더링, 정적 웹 페이지 생성 등<br />
          리액트 기반 웹 애플리케이션 기능들을 가능케 하는
          <br />
          Node.js 위에서 빌드된 오픈 소스 웹 개발 프레임워크
        </p>
      </div>
    </div>
  );
}

export default NextIntro;
