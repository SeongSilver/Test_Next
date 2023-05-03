import React from 'react';
import Link from 'next/link';

function index() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <header className="w-full text-3xl font-bold text-center mt-32">
        파일 기반 라우팅 / 동적 라우팅
      </header>
      <Link href="/dweax/soohangsaupboo">
        <span className="material-symbols-outlined cursor-pointer hover:text-white ease-in-out duration-300 ml-16">
          arrow_back_ios
        </span>
      </Link>
      <div className="mt-32 flex justify-center items-center text-xl">
        백엔드
      </div>
      <div className="mt-8 flex justify-center items-center text-xl">
        <h1 className="text-xl font-bold">파일 기반 라우팅</h1>
        <Link
          className="contentHover p-4 rounded-[10px] m-8"
          href="/dweax/soohangsaupboo/backend/Seungjoo"
        >
          차승주
        </Link>
        <Link
          className="contentHover p-4 rounded-[10px] m-8"
          href="/dweax/soohangsaupboo/backend/Youngeun"
        >
          신영은
        </Link>
        <Link
          className="contentHover p-4 rounded-[10px] m-8"
          href="/dweax/soohangsaupboo/backend/Dayeon"
        >
          최다연
        </Link>
        <Link
          className="contentHover p-4 rounded-[10px] m-8"
          href="/dweax/soohangsaupboo/backend/Jinhee"
        >
          유진희
        </Link>
      </div>
      <div className="mt-8 flex justify-center items-center text-xl">
        <h1 className="text-xl font-bold">동적 라우팅</h1>
        <Link className="contentHover p-4 rounded-[10px] m-8" href="/차승주">
          차승주
        </Link>
        <Link className="contentHover p-4 rounded-[10px] m-8" href="/신영은">
          신영은
        </Link>
        <Link className="contentHover p-4 rounded-[10px] m-8" href="/최다연">
          최다연
        </Link>
        <Link className="contentHover p-4 rounded-[10px] m-8" href="/유진희">
          유진희
        </Link>
      </div>
    </div>
  );
}

export default index;
