import React from 'react';
import Image from 'next/image';

function NextPreRendering3() {
  return (
    <div className="flex justify-evenly items-center">
      <div className="w-1/2 ">
        <p className="mb-8 text-center text-xl font-semibold">
          각 페이지에 어떤 종류의 pre-rendering을 할지 선택 가능하다
        </p>
        <Image
          src="/image/Next.js/pre-rendering/use.png"
          alt="nextjs.png"
          width={600}
          height={300}
        />
      </div>
      <div className="w-1/2 p-16 m-12">
        <h1 className="mb-8 text-center text-xl font-semibold">
          Static Generation vs Server-side Rendering
        </h1>
        <br />
        <p>
          <b>가능한 Static Generation을 추천한다</b>
          <br />
          <br />
          페이지가 한 번에 빌드될 수도 있고, 각 요청에 따라 페이지를 렌더하는데
          속도가 빨라지기 때문. 유저의 요청보다 <b>먼저</b> 해당 페이지를
          렌더해야 한다면 Static Generation을 사용
        </p>
        <br />
        <p>
          반대로 유저의 요청보다 먼저 페이지가 렌더되는 것이 좋지 않고, 자주
          데이터를 업데이터하거나, 매 쵸엉마다 컨텐츠가 달라지는 경우는
          Server-side Rendering을 사용해야 한다.
        </p>
      </div>
    </div>
  );
}

export default NextPreRendering3;
