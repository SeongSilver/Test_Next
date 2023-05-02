import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NextDynamicRoutes2() {
  return (
    <div>
      <div className="flex justify-evenly">
        <div className="w-1/2 flex flex-col justify-center pl-8">
          <h1 className="text-xl font-semibold mb-4">
            <Link href="/dweax">동적 라우팅(Dynamic Routing)</Link>
          </h1>
          <p>- 부여받은 path 값에 따라 동적으로 라우팅하는 것</p>
          <p>
            - 구조가 같은데 다른 데이터를 받아올 시 여러 파일을 만들지 않고
            <br /> 한 파일을 만들어 데이터만 다르게 구성할 때 주로 사용
          </p>
          <br />
          <br />
          <h1 className="text-xl font-semibold mb-4">동적 라우팅 사용 방법</h1>
          <p>
            - 파일을 생성하고 파일명을 지을 때 대괄호로 감싸서 사용 (예)
            [name].tsx
          </p>

          <p>
            - 동적 라우팅 할 때는 넥스트에서 기본으로 제공해주는 라이브러리인
            useRouter를 사용
          </p>
          <p>- pathname : 경로를 알려주는 프로퍼티</p>
          <p>- query : 동적 라우팅 시 동적 경로값 알려주는 프로퍼티</p>
          <Image
            src="/image/Next.js/routes/dynamicExample.png"
            alt="동적 라우팅"
            width={200}
            height={400}
            className="mt-6"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/image/Next.js/routes/dynamicRouting.png"
            alt="동적 라우팅"
            width={600}
            height={400}
            className="mt-6"
          />
        </div>
      </div>
    </div>
  );
}

export default NextDynamicRoutes2;
