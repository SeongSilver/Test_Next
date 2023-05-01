import React from 'react';

function NextCategory() {
  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center">
        <li className="w-[30vw] h-[20vh] text-center text-xl flex items-center justify-center bg-white p-8 m-8 rounded-[20px] hover:bg-slate-600 hover:text-white ease-in-out duration-300 cursor-pointer">
          Pre-rendering
        </li>
        <li className="w-[30vw] h-[20vh] text-center text-xl flex items-center justify-center bg-white p-8 m-8 rounded-[20px] hover:bg-slate-600 hover:text-white ease-in-out duration-300 cursor-pointer">
          Dynamic Routes
        </li>
        <li className="w-[30vw] h-[20vh] text-center text-xl flex items-center justify-center bg-white p-8 m-8 rounded-[20px] hover:bg-slate-600 hover:text-white ease-in-out duration-300 cursor-pointer">
          강력한 페이지 이동 Link
        </li>
        <li className="w-[30vw] h-[20vh] text-center text-xl flex items-center justify-center bg-white p-8 m-8 rounded-[20px] hover:bg-slate-600 hover:text-white ease-in-out duration-300 cursor-pointer">
          Code Spliting
        </li>
      </ul>
    </div>
  );
}

export default NextCategory;
