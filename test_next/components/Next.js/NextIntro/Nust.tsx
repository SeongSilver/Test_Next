import React from 'react';
import Image from 'next/image';

function Nuxt() {
  return (
    <div>
      <header>
        <h1 className="text-xl text-center font-semibold mb-4">Nuxt.js</h1>
      </header>
      <div className="flex">
        <div className="flex">
          <Image
            src="/image/logo/nextjs.png"
            alt="nextjs.png"
            width={200}
            height={300}
          />
          <Image
            src="/image/logo/nuxt.png"
            alt="nextjs.png"
            width={250}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Nuxt;
