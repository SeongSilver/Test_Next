import React from 'react';
import Image from 'next/image';
function NextLink() {
  return (
    <div>
      <header className="flex items-center justify-center mb-12">
        <h1 className="text-xl font-semibold mr-16 text-center">
          Next.js에서 페이지를 이동하는 3가지 방법
        </h1>
        <Image
          src="/image/Next.js/link/link.png"
          alt="3가지 페이지 이동 방법"
          width={450}
          height={50}
        />
      </header>
      <div className="flex justify-evenly">
        <div className="w-[22vw] h-[35vh] p-4 bg-white rounded-[15px] shadow-xl">
          <h1 className="font-semibold my-2 text-center">Link 태그</h1>
          <p>
            - a 태그를 생성하기 때문에 웹사이트가 크롤링되어 <b>SEO에 유리</b>
          </p>
          <p>
            - <b>동적 라우팅 사용 시</b> map() 소드를 이용해 length만큼 생성 후
            path를 동적으로 부여
          </p>
          <p>
            - href를 문자열과 변수의 조합 외에 <b>객체로 주는 방법</b>도
            있다.(pathname에 동적으로 사용할 부분에 대괄호 사용, query에 객체
            내용 추가)
          </p>
          <p>- 페이지를 다시 로드하지 않고 SPA 동작처럼 '보이게' 만듦</p>
        </div>
        <div className="w-[22vw] h-[35vh] p-4 bg-white rounded-[15px] shadow-xl">
          <h1 className="font-semibold my-2 text-center">Route</h1>
          <p>- next/router의 useRouter를 선언 후 사용</p>
          <p>- router.push의 경우 window.location과 비슷하게 동작</p>
          <p>
            - a 태그를 만들지 않기 때문에 해당링크는 크롤링되지 않아
            <b> SEO에 좋지 않음</b>
          </p>
          <p>- onClick과 같은 이벤트 핸들러와 같이 사용</p>
        </div>
        <div className="w-[22vw] h-[35vh] p-4 bg-white rounded-[15px] shadow-xl">
          <h1 className="font-semibold my-2 text-center">a 태그</h1>
          <p>
            - 순수 HTML요소로, 사용자를 새 페이지의 url로 이동시키는 하이퍼링크
            생성
          </p>
          <p>- a 태그를 사용해서 페이지 이동시 페이지가 완전히 새로고침됨</p>
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold text-center mt-8">
          보통의 경우 Link 태그를 사용하는 것이 좋으며, SEO에 상관없이 SPA처럼
          동작하게 하고 싶을 때엔 router.push를 사용한다
        </p>
      </div>
    </div>
  );
}

export default NextLink;
