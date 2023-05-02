import React from 'react';
import Link from 'next/link';
function Introduce() {
  return (
    <div className="mx-auto flex flex-col">
      <div className="h-screen">
        <div>
          <h1
            id="intro"
            className="text-3xl w-fit px-4 py-2 bg-gray-100 rounded-full tracking-tight"
          >
            발표자 소개
          </h1>
          <a href="#intro2">
            <button>intro</button>
          </a>
        </div>
        <div className="flex h-screen justify-center items-center space-x-3">
          <div className="shadow-lg bg-white rounded-md p-5 w-1/3 mb-10">
            <h1 className="flex items-end space-x-3">
              <span className="text-3xl">김가현</span>
              <span>프론트엔드 엔지니어</span>
            </h1>
            <ul className="py-5">
              <li>React로 사내 백오피스 개발</li>
              <li>Tailwind, React-query, Jotai</li>
              <li>Ts와 Next를 공부중</li>
            </ul>
          </div>
          <div className="shadow-lg bg-white rounded-md p-5 w-1/3 mb-10">
            <h1 className="flex items-end space-x-3">
              <span className="text-3xl">유성은</span>
              <span>프론트엔드 엔지니어</span>
            </h1>
            <ul className="py-5">
              <li>React, Next,js 개인, 팀 프로젝트 개발</li>
              <li>
                (페인트레블 : 해외여행 기록 서비스 / 쿼카맵 : 대체유 카페 제공
                서비스 등)
              </li>
              <li>TS, Next를 공부중</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="h-screen">
          <h1
            id="intro2"
            className="text-3xl w-fit px-4 py-2 bg-gray-100 rounded-full tracking-tight"
          >
            발표 목차
          </h1>
          <div className="h-screen flex justify-center items-center">
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
              <Link
                href="/routingTest1/FrontendFlow"
                className="group rounded-lg border border-transparent mx-8 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>웹개발의 흐름</h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  프론트엔드 웹개발의 흐름
                </p>
              </Link>
              <Link
                href="/routingTest1/routingTest2/SEOExplanation"
                className="group rounded-lg border border-transparent mx-8 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>SEO 소개</h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  SEO 소개와 사용 방법 소개
                </p>
              </Link>
              <Link
                href="/routingTest3/NextExplanation"
                className="group rounded-lg border border-transparent mx-8 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>Next.js란</h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Next.js에 대한 간단한 설명
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
