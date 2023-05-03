import React from 'react';
import Image from 'next/image';

function Next13Function3() {
  return (
    <div className="flex justify-evenly ">
      <div className="w-[30vw] h-full">
        <h1 className="text-xl text-center font-semibold mb-4">
          next/Image, next/font
        </h1>
        <Image className="ml-12"src="/image/Next.js/Next13/layoutshift.png" alt="getServerSideProps" width={450} height={100}/>
        <p className="mt-2">- Image의 경우 큰 변화는 없지만 next/Image를 사용하면 이미지가 자동으로 최적화된다</p>
        <p>- 이미지 로드가 느릴 때 기존의 레이아웃이 밀려나는 현상인 <b>Layout Shift</b>가 발생하는데 이를 방지 하기 위해 이미지의 width와 height를 설정해야 한다</p>
        <p>- Next.js 13버전에서는 이를 자동으로 처리해주기 때문에 최적화에 유리하다</p>
        <p>- next/Image에서 alt를 필수 property로 하기 때문에 웹 접근성이 향상되었다</p>
        <p>- next/font도 마찬가지로 <b>Layout Shift</b>가 방지되고, 핵심적인 기능은 구글 폰트가 내장되어 브라우제엇 구글 폰트 요청을 별도로 하지 않아도 사용 가능하다</p>
      </div>
      <div className="w-[30vw] h-full">
        <h1 className="text-xl text-center font-semibold mb-4">
          next/Link
        </h1>
        <Image className="ml-4" src="/image/Next.js/Next13/link.png" alt="getServerSideProps" width={555} height={100}/>
        <p className="mt-2">- Link 태그를 사용하려먼 a태그를 필요로 했던 이전 버전과는 달리, Next.js 13버전부터는 a태그를 더 이상 자식요소로 필요로 하지 않는다</p>
        <p>- 기본 태그에도 props를 전달할 수 있다.(Link태그의 passHref property 활용)</p>
      </div>
    </div>
  );
}

export default Next13Function3;
