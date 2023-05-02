import React from 'react';
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
      <div className="mt-64 flex justify-center items-center text-xl">
        경영관리팀
      </div>
    </div>
  );
}

export default index;
