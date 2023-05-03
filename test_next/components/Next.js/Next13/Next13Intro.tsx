import React from 'react';
import Image from 'next/image';

function Next13Intro() {
  return (
    <div className="flex justify-evenly">
      <div className="w-[35vw] h-full mt-24">
        <Image
          src="/image/Next.js/Next13/Next13.png"
          alt="next13"
          width={700}
          height={400}
        />
      </div>
      <div className="w-[30vw] h-full">
        <h1 className="text-xl text-center font-semibold mb-4">
          Next.13 13버전 업데이트(2022.10.26)
        </h1>
        <br />
        <p>
          - app/ Directory (beta) (app/디렉토리): Easier, faster, less client
          JS. (쉽고, 빠르고, 적은 클라이언트의 JS) / Layouts (레이아웃) / React
          Server Components (리액트 서버 컴포넌트) / Streaming (스트리밍)
        </p>
        <br />
        <p>
          <b>
            - Data Fecthing 업데이트(getStaticProps, getServerSideProps 문법
            사용X)
          </b>
        </p>
        <br />
        <p>
          - Turbopack (alpha): Up to 700x faster Rust-based Webpack replacement.
          (700배 빠른 Rust 기반의 웹팩 대체품)
        </p>
        <br />
        <p>
          - New next/image (stable): Faster with native browser lazy loading.
          (더 빨라진 레이지 로딩)
        </p>
        <br />
        <p>
          - New @next/font (beta): Automatic self-hosted fonts with zero layout
          shift. (구글 폰트 내장 (!))
        </p>
        <br />
        <p>
          - Improved next/link: Simplified API with automatic a tag(자식 요소로
          a태그 불필요)
        </p>
      </div>
    </div>
  );
}

export default Next13Intro;
