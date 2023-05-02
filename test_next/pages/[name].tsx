import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Name = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <span
        className="material-symbols-outlined cursor-pointer hover:text-white ease-in-out duration-300 absolute top-[50px] left-[100px]"
        onClick={() => {
          router.back();
        }}
      >
        arrow_back_ios
      </span>
      <div className="w-full h-full flex justify-center items-center">
        <Image
          // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/dweax_logo_1.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <p className="text-3xl">
          &emsp;수행사업부&emsp;<b>{name}</b> 주임
        </p>
      </div>
    </div>
  );
};

export default Name;
