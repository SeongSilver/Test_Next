import React from 'react';
import Image from 'next/image';

function NextPreRendering2() {
  return (
    <div>
      <div className="flex justify-evenly mt-4">
        <div>
          <h1 className="text-xl font-semibold my-4 text-center">
            Static Generation
          </h1>
          <div className="h-[38vh] flex items-center bg-white mb-4">
            <Image
              src="/image/Next.js/pre-rendering/static.png"
              alt="nextjs.png"
              width={600}
              height={300}
            />
          </div>
          <p>- HTML을 빌드 타임에 생성한다</p>
          <p>- pre-render 된 HTML은 그 다음에 각 리퀘스트에서 재사용된다</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold my-4 text-center">
            Server Side Rendering
          </h1>
          <div className="h-[38vh] flex items-center bg-white mb-4">
            <Image
              src="/image/Next.js/pre-rendering/ssr.png"
              alt="nextjs.png"
              width={600}
              height={300}
            />
          </div>
          <p>- HTML을 각 리퀘스트가 일어날 때 생성하는 방식</p>
        </div>
      </div>
    </div>
  );
}

export default NextPreRendering2;
