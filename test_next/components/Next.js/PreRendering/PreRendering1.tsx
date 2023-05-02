import React from 'react';
import Image from 'next/image';

function NextPreRendering1() {
  return (
    <div>
      <div>
        <div className="flex justify-evenly">
          <div className="mr-32">
            <Image
              src="/image/Next.js/pre-rendering/noprerendering.png"
              alt="nextjs.png"
              width={480}
              height={300}
            />
          </div>
          <div className="mt-16">
            <h1 className="text-xl font-semibold">Pre-rendering</h1>
            <br />
            <p>
              Pre-rendering은 Next.js가 client-side JavaScript로 모든 작업을
              <br />
              수행하는 대신 미리 각 페이지에 대해서 HTML을 만들어두는 것을 의미
              <br />
              Pre-rendering은 SEO에서 더 나은 퍼포먼스를 보여준다
            </p>
            <br />
            <br />
            <h1 className="text-xl font-semibold">Hydration</h1>
            <br />
            <p>
              미리 만들어진 HTML은 해당 페이지에 적은 자바스크립트 코드와
              연관된다
              <br />
              페이지가 브라우저에 로드될 때, 해당 자바스크립트 코드가 작동하고{' '}
              <br />
              완전한 인터렉티브 페이지가 되도록 만든다
            </p>
            <br />
            <br />
            <p className="text-xl font-bold">
              Next.js는 모든 페이지를 Pre-rendering 한다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextPreRendering1;
