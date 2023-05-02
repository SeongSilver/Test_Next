import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function index() {
  const router = useRouter();

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <header className="w-full text-3xl font-bold text-center mt-32">
        Dynamic Routes
      </header>
      <span
        className="material-symbols-outlined cursor-pointer hover:text-white ease-in-out duration-300 ml-16"
        onClick={() => {
          router.back();
        }}
      >
        arrow_back_ios
      </span>
      <div className=" flex justify-center items-center text-xl mt-32">
        <div className="contentHover m-12 p-4 rounded-[10px]">
          <Link href="http://www.dweax.com">디윅스 홈페이지</Link>
        </div>
        <div className="flex-none">
          <span className="contentHover m-12 p-4 rounded-[10px]">
            <Link href="/dweax/soohangsaupboo">수행사업부</Link>
          </span>
          <span className="contentHover m-12 p-4 rounded-[10px]">
            <Link href="/dweax/saupgihoeigsil">사업기획실</Link>
          </span>
          <span className="contentHover m-12 p-4 rounded-[10px]">
            <Link href="/dweax/gyungyounggwanriteam">경영관리팀</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default index;
