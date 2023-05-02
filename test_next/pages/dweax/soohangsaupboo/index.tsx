import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function iundex() {
  const router = useRouter();
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <header className="w-full text-3xl font-bold text-center mt-32">
        파일 기반 라우팅
      </header>
      <span
        className="material-symbols-outlined cursor-pointer hover:text-white ease-in-out duration-300 ml-16"
        onClick={() => {
          router.back();
        }}
      >
        arrow_back_ios
      </span>
      <div className="mt-32 flex justify-center items-center text-xl">
        수행사업부
      </div>
      <div className="mt-8 flex justify-center items-center text-xl">
        <Link
          className="contentHover p-4 rounded-[10px] m-8"
          href="/dweax/soohangsaupboo/frontend"
        >
          프론트엔드
        </Link>
        <Link
          className="contentHover p-4 rounded-[10px] m-8"
          href="/dweax/soohangsaupboo/backend"
        >
          백엔드
        </Link>
      </div>
    </div>
  );
}

export default iundex;
