import React from 'react';

function NextIntro2() {
  return (
    <div className="w-full h-full flex justify-evenly items-center mt-[15vh]">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xl font-bold">React</h1>
        <br />
        <p>+</p>
        <br />
        <h1 className="text-xl font-bold">Express.js</h1>
        <br />
        <p>+</p>
        <br />
        <h1 className="text-xl font-bold">React-Router-Dom</h1>
        <br />
        <p>+</p>
        <br />
        <h1 className="text-xl font-bold">Server Side Rendering</h1>
      </div>
      <div>
        <p>
          <b className="text-xl">
            Next.js는 여러기술을 섞어놓은 영리한 기술이다. - 생활코딩 -
          </b>
          <br />
          <br />
          <br />
          Virtual Dom을 사용, 성능 개선과 빠른 렌더링이 가능한 React
          <br />
          <br />
          Node.js를 활용해서 HTTP요청 및 응답 처리 등을 빠르고 간편하게 사용할
          수 있는 Express.js
          <br />
          <br />
          React에서 브라우저의 라우팅을 관리하는 React-Router-Dom
          <br />
          <br />
          Server Side Rendering을 지원하는 웹 프레임워크
        </p>
      </div>
    </div>
  );
}

export default NextIntro2;
