import React from 'react';
import Image from 'next/image';

function Next13Function2() {
  return (
    <div className="flex justify-evenly mt-8">
      <div className="w-[30vw] h-full">
        <h1 className="text-xl text-center font-semibold mb-8">
          app / Directory(Beta)
        </h1>
        <p>- page의 향상된 기능으로 현재는 page 디렉토리와 app 디렉토리가 공존할 수 있는 베타버전으로 제공되고 있다</p><br/>
        <p>- 레이아웃 : 여러 페이지 간에 헤더, 푸터와 같은 공통적인 UI를 공유하여 불필요한 리렌더링을 방지, 컴포넌트간 상호작용 구현 가능<br/>
        app디렉토리 안에 page.js 파일만 생성하고 터미널을 실행시키면, Next.js에서 layout.js 파일을 자동으로 생성 → 이 파일이 레이아웃을 적용할 수 있는 파일이다
        </p><br/>
        <p>- 리액트 서버 컴포넌트 : app디렉토리에서 리액트 서버 컴포넌트를 사용하여 서버에서만 컴포넌트를 렌더링하고 클라이언트에 전송되는 자바스크립트의 양을 줄여 초기 페이지 로딩을 더 빠르게 수행</p><br/>
        <p>- 스트리밍 : app디렉토리에서 loading.js/.tsx 라는 예약 파일을 생성하여 사용자가 렌더링 되기 이전에 로딩 중인 화면을 표시할 수 있는 기능(스피너와 같은 로딩 화면들을 구현하기 좋음)</p>
      </div>
      <div className="w-[30vw] h-full">
        <h1 className="text-xl text-center font-semibold mb-8">
          Turbopack(Alpha)
        </h1>
        <Image src="/image/Next.js/Next13/turbopack.png" alt="getServerSideProps" width={500} height={100}/>
        <br/>
        <p className="my-2">- Turbopack : 웹팩의 새로운 Rust기반 번들링 후속제품</p>
        <p>- 기존의 웹팩보다 700배, Vite보다 10배 빠르게 JavaSdcript를 필요한 파일로 컴파일해주는 번들링 툴</p>
        <p>- 안정화되면 사용하는 것이 낫다는 평가</p>
      </div>
    </div>
  );
}

export default Next13Function2;
