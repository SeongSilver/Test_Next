import React from 'react';
import Image from 'next/image';

function Next13Function() {
  return (
    <div className="flex justify-evenly mt-12">
      <div className="w-[30vw] h-full mt-12">
        <Image
          src="/image/Next.js/Next13/Next13.png"
          alt="next13"
          width={700}
          height={400}
        />
      </div>
      <div className="w-[30vw] h-full">
        <h1 className="text-xl text-center font-semibold mb-4">
          app / Directory
        </h1>
      </div>
    </div>
  );
}

export default Next13Function;
