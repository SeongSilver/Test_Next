import React from 'react';
import Image from 'next/image';

function NextPreRendering4() {
  return (
    <div className="flex justify-evenly items-center">
      <div className="w-[50%] p-8">
        <h1 className="mb-8 text-center text-xl font-semibold">
          Static Generation은
          <br /> 데이터가 있어도, 없어도 가능하다
        </h1>
        <p>
          어떤 페이지들은 처음에 외부 데이터를 fetch해오지 않으면 HTML을
          렌더하는 것이 불가능하기도 하다 이 경우 파일시스템에 접근하거나, 외부
          API를 fetch하거나, 또는 빌드 타임에 DB에 접근해야할 수도 있다. →
          Next.js는 이런 경우를 지원한다
        </p>
        <br />
        <br />
        <br />
        <h1 className="mb-8 text-center text-xl font-semibold">
          Next.js에서는 컴포넌트를 내보낼 때 <br />
          getStaticProps라는 async 함수도 같이 내보낼 수 있다
        </h1>
        <p>
          - getStaticProps가 빌드 타임에 작동하고, 함수 내부에서, 외부 데이터를
          받아오고 이를 props로 페이지에 보낼 수 있다
        </p>
        <p>
          - getStaticProps는 Next.js에게 "이 페이지는 데이터 의존성이 있으니, 이
          페이지 빌드 타임에 pre-render할 때 데이터부터 받아와!" 라고 전달한다
        </p>
      </div>
      <div>
        <Image
          src="/image/Next.js/pre-rendering/static_data.png"
          alt="nextjs.png"
          width={600}
          height={300}
        />
      </div>
    </div>
  );
}

export default NextPreRendering4;
