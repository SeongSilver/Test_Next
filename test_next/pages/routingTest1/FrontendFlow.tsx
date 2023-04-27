import React from 'react';
import Image from 'next/image';

function FrontendFlow() {
  return (
    <div className="mx-auto flex flex-col">
      <div className="h-screen">
        <div>
          <h1
            id="intro"
            className="text-3xl w-fit px-4 py-2 bg-gray-100 rounded-full tracking-tight"
          >
            태초에 HTML이 있었다
          </h1>
          <a href="#intro2">
            <button>intro</button>
          </a>
        </div>
        <div className="flex flex-col h-screen justify-center items-center space-x-3">
          <h1 className="text-5xl font-bold mb-6">정적 웹페이지의 시대</h1>
          <p className="text-xl text-center mb-6">
            누군가 문서를 준비해 컴퓨터에 올려놓으면 다른 사람이 볼 수 있다!
            <br />
            물리적인 제약 없이 정보에 접근할 수 있게 됨
          </p>
          <Image
            src="/firstweb.webp"
            alt="최초로 게시된 월드와이드웹의 소개 웹페이지 메인사진"
            width={1000}
            height={30}
          />
        </div>
      </div>
      <div>
        <div className="h-screen">
          <h1
            id="intro2"
            className="text-3xl w-fit px-4 py-2 bg-gray-100 rounded-full tracking-tight"
          >
            동적으로 만들면 어떨까?
          </h1>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">동적 웹페이지로</h1>
            <p className="text-xl text-center mb-6">
              HTML에 백엔드 코드를 연결해서 프로그래밍 방식으로 제어하자.
              <br />
              DB와 통신하는 언어 생태계 전반에 걸쳐 서버기반 템플릿이 등장
            </p>
            <div className="flex">
              <Image
                src="/image/code_guest.png"
                alt="<h1>안녕하세요 방문자님</h1>"
                width={500}
                height={37}
              />
              <Image
                src="/image/code_name.png"
                alt="최초로 게시된 월드와이드웹의 소개 웹페이지 메인사진"
                width={500}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <h1
            id="intro3"
            className="text-3xl w-fit px-4 py-2 bg-gray-100 rounded-full tracking-tight"
          >
            웹의 빠른 진화
            <a href="#intro3">
            <button>intro</button>
          </a>
          </h1>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">더 많은 상호작용</h1>
            <p className="text-xl text-center mb-6">
              더 많은 상호작용을 위해 Adobe Flash등의 라이브러리 사용
              <br />
              웹 API의 미비한 점을 Jquery가 보완
            </p>
            <h1 className="text-5xl font-bold mb-6">그러나</h1>
            <p className="text-xl text-center mb-6">
              당시 MPA의 문제점 대두 
              <br />
              웹 API의 미비한 점을 Jquery가 보완
            </p>
            <div className="flex">
              <Image
                src="/image/code_guest.png"
                alt="<h1>안녕하세요 방문자님</h1>"
                width={500}
                height={37}
              />
              <Image
                src="/image/code_name.png"
                alt="최초로 게시된 월드와이드웹의 소개 웹페이지 메인사진"
                width={500}
                height={37}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontendFlow;
