import React from 'react';
import Link from 'next/link';

function NextCategory() {
  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center">
        <li className="w-[20vw] h-[20vh] text-center text-xl flex items-center justify-center bg-white p-8 m-8 rounded-[20px] hover:bg-slate-600 hover:text-white ease-in-out duration-300 cursor-pointer">
          Pre-rendering
        </li>
        <li className="w-[20vw] h-[20vh] text-center text-xl flex items-center justify-center bg-white p-8 m-8 rounded-[20px] hover:bg-slate-600 hover:text-white ease-in-out duration-300 cursor-pointer">
          <Link href="/dweax">파일기반 / 동적 라우팅</Link>
        </li>
        <li className="w-[20vw] h-[20vh] text-center text-xl flex items-center justify-center bg-white p-8 m-8 rounded-[20px] hover:bg-slate-600 hover:text-white ease-in-out duration-300 cursor-pointer">
          페이지 이동 &lt;Link&gt; 태그
        </li>
        <li className="w-[20vw] h-[20vh] text-center text-xl flex items-center justify-center bg-white p-8 m-8 rounded-[20px] hover:bg-slate-600 hover:text-white ease-in-out duration-300 cursor-pointer">
          Code Spliting
        </li>
        <li className="w-[20vw] h-[20vh] text-center text-xl flex items-center justify-center bg-white p-8 m-8 rounded-[20px] hover:bg-slate-600 hover:text-white ease-in-out duration-300 cursor-pointer">
          typescript, tailwind CSS 지원
        </li>
        <li className="w-[20vw] h-[20vh] text-center text-xl flex items-center justify-center bg-white p-8 m-8 rounded-[20px] hover:bg-slate-600 hover:text-white ease-in-out duration-300 cursor-pointer">
          Vercel 배포
        </li>
      </ul>
    </div>
  );
}

export default NextCategory;
