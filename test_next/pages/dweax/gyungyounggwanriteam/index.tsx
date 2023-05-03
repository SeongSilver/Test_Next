import React from 'react';
import Link from 'next/link';

function index() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <header className="w-full text-3xl font-bold text-center mt-32">
        파일 기반 라우팅
      </header>
      <Link href="/dweax">
        <span className="material-symbols-outlined cursor-pointer hover:text-white ease-in-out duration-300 ml-16">
          arrow_back_ios
        </span>
      </Link>
      <div className="mt-64 flex justify-center items-center text-xl">
        경영관리팀
      </div>
    </div>
  );
}

export default index;
