import React from 'react';

function NextCodeSpliting() {
  return (
    <div className="flex justify-evenly mt-32">
      <div className="w-[30vw] h-full">
        <h1 className="text-xl text-center font-semibold mb-4">
          코드분할 (CodeSpliting)
        </h1>
        <br />
        <p>
          - Next.js는 용량이 커지면 로딩속도가 느려지는것을 대비하여 파일을
          분리하는 코드 스플리팅을 자동적으로 해준다
        </p>
        <br />
        <p>
          - 필요하지 않은 컴포넌트까지 모두 불러오는 것은 비효율적인데 Next.js는
          Pages 폴더에 있는 Page를 index 페이지만 불러오고 그 이후에는 각
          페이지에 필요한 컴포넌트만 불러오는 방식
        </p>
        <br />
        <p>- 페이지를 추가로 작성하면 서버를 재실행 시켜야 한다</p>
      </div>
      <div className="w-[30vw] h-full">
        <h1 className="text-xl text-center font-semibold mb-4">vercel 배포</h1>
        <br />
        <p>
          - Vercel은 Next.js에서 제공하는 배포 플랫폼으로 [빌드 + 배포 + 호스팅]
          서비스를 제공한다
        </p>
        <br />
        <p>
          - Next.js 공식문서에는 Vercel을 통한 Front Project 배포를
          권장하고있으며 github의 레파지토리를 통해 쉽게 배포할 수 있다
        </p>
      </div>
    </div>
  );
}

export default NextCodeSpliting;
