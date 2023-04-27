import React from 'react';
import Image from 'next/image';

function FrontendFlow() {
  return (
    <div className="mx-auto flex flex-col">
      <div className="h-screen">
        <div>
          <h1
            id="intro1"
            className="text-2xl w-fit px-4 py-2 font-bold tracking-tight rounded-full bg-gray-100"
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
            width={800}
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
                alt="<h1>안녕하세요 name님</h1>"
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
            빠르게 변화하는 지형도
            <a href="#intro3">
              <button>intro</button>
            </a>
          </h1>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">더 많은 상호작용</h1>
            <p className="text-xl text-center mb-6">
              더 많은 상호작용을 위해 Adobe Flash등의 라이브러리 사용
              <br />웹 API의 미비한 점을 Jquery가 보완
            </p>
            <h1 className="text-5xl font-bold mb-6">그러나</h1>
            <p className="text-xl text-center mb-6">
              당시 MPA의 문제점 대두
              <br />
              서버코드가 템플릿을 위해 작성되고
              <br />
              템플릿은 종종 글로벌 변수에 접근하는 복잡한 상태
              <br />
              SQL 주입같은 보안문제
            </p>
          </div>
        </div>
        <div className="h-screen">
          <h1
            id="intro4"
            className="text-3xl w-fit px-4 py-2 bg-gray-100 rounded-full tracking-tight"
          >
            웹앱의 가능성에 주목하다
            <a href="#intro3">
              <button>intro</button>
            </a>
          </h1>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">AJAX와 비동기 업데이트</h1>
            <p className="text-xl text-center mb-6">
              로딩이 필요한 데이터를 JSON으로 요청, 새로고침 없이 새 데이터를
              화면에 그린다
              <br />
              데스크톱 앱에 비견하는 매끄러운 사용자 경험의 가능성에 주목
            </p>
            <div className="flex">
              <Image
                src="/image/googleMaps.webp"
                alt="2005년 구글맵스 메인"
                width={800}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <h1
            id="intro5"
            className="text-3xl w-fit px-4 py-2 bg-gray-100 rounded-full tracking-tight"
          >
            프론트엔드와 백엔드의 분리
            <a href="#intro3">
              <button>intro</button>
            </a>
          </h1>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">
              UI의 이동: 백엔드 템플릿에서 프론트엔드로
            </h1>
            <p className="text-xl text-center mb-6">
              좋은 사용성에 대한 바람이 재사용 가능한 위젯 라이브러리 사용으로{' '}
              <br />
              UI구조들이 프론트엔드 코드로 넘어가기 시작
              <br />
              중복되는 코드: 백엔드로부터 템플릿 이동이 가속화
            </p>
            <div className="flex">
              <Image
                src="/image/jqueryUi.jpg"
                alt="jqueryUI 컴포넌트 모음 이미지"
                width={400}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <h1
            id="intro6"
            className="text-3xl w-fit px-4 py-2 bg-gray-100 rounded-full tracking-tight"
          >
            DOM조작의 어려움
            <a href="#intro6">
              <button>intro</button>
            </a>
          </h1>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">
              더많은 상호작용: DOM을 어떻게 제어할까
            </h1>
            <p className="text-xl text-center mb-6">
              DOM 조작으로인한 데이터 업데이트, 동기화문제
              <br />
              명령형 UI코드에서 좋아요 버튼을 누른다면?
            </p>
            <div className="flex">
              <Image
                src="/image/code_jsUi.png"
                alt="바닐라 js로 작성한 명령형 UI코드"
                width={600}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <h1
            id="intro7"
            className="text-3xl w-fit px-4 py-2 bg-gray-100 rounded-full tracking-tight"
          >
            모던 프레임워크의 등장
            <a href="#intro7">
              <button>intro</button>
            </a>
          </h1>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">모던 프레임워크의 등장</h1>
            <p className="text-xl text-center mb-6">
              어떻게 가변적인 상태를 업데이트 할 것인가?
              <br />
              연속적인-복잡한 UI변화를 어떻게 해결할 것인가?
            </p>
            <div className="flex">
              <Image
                src="/image/frameWork.png"
                alt="바닐라 js로 작성한 명령형 UI코드"
                width={600}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <h1
            id="intro7"
            className="text-3xl w-fit px-4 py-2 bg-gray-100 rounded-full tracking-tight"
          >
            리액트의 경우
            <a href="#intro7">
              <button>intro</button>
            </a>
          </h1>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">모던 프레임워크의 등장</h1>
            <p className="text-xl text-center mb-6">
              jsx - 선언적인 프론트엔드 코드 작성
              <br />
              컴포넌트 모델 - 독립적인 컴포넌트를 병렬로 작업할 수 있는
              프론트엔드 팀 성립
              <br />
            </p>
            <div className="flex">
              <Image
                src="/image/frameWork.png"
                alt="바닐라 js로 작성한 명령형 UI코드"
                width={600}
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
