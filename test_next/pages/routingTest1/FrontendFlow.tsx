import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function FrontendFlow() {
  return (
    <div className="mx-auto flex flex-col">
      <div className="h-screen">
        <div className="flex justify-end">
          <a href="#intro2">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div className="flex flex-col h-screen justify-center items-center space-x-3">
          <h1 className="text-5xl font-bold mb-6">HTML:정적 웹페이지의 시대</h1>
          <p className="text-xl text-center mb-6">
            누군가 문서를 준비해 컴퓨터에 올려놓으면 다른 사람이 볼 수 있다!
            <br />
            유럽 입자 물리 연구소에서 논문 공유를 위해 고안
          </p>
          <a
            href="http://info.cern.ch/hypertext/WWW/TheProject.html"
            target="blank"
          >
            <Image
              src="/image/flow/internetIcon.svg"
              alt="최초로 게시된 월드와이드웹의 소개 웹페이지 메인사진"
              width={300}
              height={30}
            />
          </a>
        </div>
      </div>
      <div>
        <div className="h-screen">
          <a id="intro2" href="#intro3" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">
              GUI와 PC의 등장 : 앨런케이
            </h1>
            <p className="text-xl text-center mb-6">
              전 세계 모든 사람이 컴퓨터를 사용하고, 그래픽을 출력하는 모니터와
              마우스를 사용하고, 자신이 사용할 응용 프로그램을 직접 개발할 것!
              <br />
              애플과 마이크로소프트에서 GUI를 채택한 PC를 출시
            </p>
            <div className="flex">
              <Image
                src="/image/flow/smalltalk.jpg"
                alt="앨런케이가 개발한 스몰토크 화면"
                width={500}
                height={37}
              />
              <Image
                src="/image/flow/mvc.png"
                alt="mvc 패턴 도표"
                width={500}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <a id="intro3" href="#intro4" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">
              동적 웹페이지로: 쇼핑몰, mvc
            </h1>
            <div className="flex space-x-12">
              <div className="text-xl mb-6">
                <h2 className="font-bold bg-gray-100 px-2 py-1 rounded-full w-fit mb-2">
                  장바구니
                </h2>
                처음으로 웹에서 동적 상호작용이 필요해짐!
                <br />
                상품을 장바구니에 담고, 구매하기
                <br />
                문서였던 html에 form이 등장, 고도화되기 시작
              </div>
              <div className="text-xl mb-6">
                <h2 className="font-bold bg-gray-100 px-2 py-1 rounded-full w-fit mb-2">
                  템플릿 엔진
                </h2>
                정적이었던 데이터가 바뀔 수 있다!
                <br />
                상품이 매진되거나, 교체될 때
                <br />
                HTML에 백엔드 코드를 연결해서 프로그래밍
                <br />
                언어 생태계 전반에 걸쳐 서버기반 템플릿이 등장
              </div>
            </div>
            <div className="flex">
              <div>
                <Image
                  src="/image/flow/payPal.webp"
                  alt="초창기 페이팔의 송금화면"
                  width={500}
                  height={37}
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/image/flow/code_name.png"
                  alt="<h1>안녕하세요 name님</h1>"
                  width={500}
                  height={37}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen">
          <a id="intro4" href="#intro5" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">javaScript와 웹표준</h1>
            <p className="text-xl text-center mb-6">
              브라우저마다 js구현이 다름
              <br />
              인터넷 익스플로러의 독과점
              <br />
              Adobe Flash등의 라이브러리 사용
              <br />웹 API의 미비한 점을 Jquery가 보완
            </p>

            <p className="text-xl text-center mb-6">
              웹표준 제정 후 html5, css3, js
              <br />
              서드파티 라이브러리를 사용하지 않고도 웹개발이 가능해짐
              <br />
            </p>
            <Image
              src="/image/flow/adobeFlash.webp"
              alt="어도비 플래쉬 설치화면"
              width={500}
              height={37}
            />
          </div>
        </div>
        <div className="h-screen">
          <a id="intro5" href="#intro6" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">AJAX, 비동기 업데이트</h1>
            <p className="text-xl text-center mb-6">
              로딩이 필요한 데이터를 JSON으로 요청, 새로고침 없이 새 데이터를
              화면에 그린다
              <br />
              1. 검색어 자동완성 2. 구글독스의 공통편집
              <br />
              데스크톱 앱에 비견하는 매끄러운 사용자 경험의 가능성에 주목
            </p>
            <div className="flex">
              <Image
                src="/image/flow/googleMain.webp"
                alt="초창기 구글 자동완성 메인"
                width={900}
                height={20}
              />
              <Image
                src="/image/flow/googleDoc.webp"
                alt="초창기 구글독스 메인"
                width={500}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <a id="intro6" href="#intro7" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">
              UI의 이동: 백엔드 템플릿에서 프론트엔드로
            </h1>
            <p className="text-xl text-center mb-6">
              좋은 사용성에 대한 바람이 재사용 가능한 위젯 라이브러리 사용으로{' '}
              <br />
              UI구조들이 프론트엔드 코드로 넘어가기 시작
              <br />
              중복되는 코드: 백엔드로부터 템플릿 이동이 가속화
            </p>
            <div className="flex">
              <Image
                src="/image/flow/jqueryUi.jpg"
                alt="jqueryUI 컴포넌트 모음 이미지"
                width={400}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <a id="intro7" href="#intro8" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">DOM 상호작용</h1>
            <p className="text-xl text-center mb-6">
              DOM 조작으로인한 데이터 업데이트, 동기화문제
            </p>
            <p>
              명령형 UI코드에서 좋아요 버튼을 누른다면?
              <br />
              어떻게 가변적인 상태를 업데이트 할 것인가?
              <br />
              연속적인-복잡한 UI변화를 어떻게 해결할 것인가?
            </p>
            <div className="flex">
              <Image
                src="/image/flow/code_jsUi.png"
                alt="바닐라 js로 작성한 명령형 UI코드"
                width={600}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <a id="intro8" href="#intro9" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">모던 프레임워크와 SNS</h1>
            <p className="text-xl text-center mb-6">
              스크롤 할 때마다 새로운 뉴스피드가 떠야함
              <br />
              실시간으로 작성되는 댓글을 확인할 수 있어야 함
              <br />
              실시간으로 올라가는 좋아요를 확인할 수 있어야 함
              <br />
              ui는 복잡해지고 데이터는 방대해졌다
            </p>
            <div className="flex">
              <Image
                src="/image/flow/firstFacebook.jpg"
                alt="초창기 페이스북 메인"
                width={400}
                height={37}
              />
              <Image
                src="/image/flow/frameWork.png"
                alt="뷰 앵귤러 리액트 프레임워크 로고"
                width={600}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <a id="intro9" href="#intro10" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">리액트와 SPA</h1>

            <div className="flex">
              <Image
                src="/image/flow/csr.webp"
                alt="리액트 csr을 설명하는 도표"
                width={800}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <a id="intro10" href="#intro11" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">모바일의 등장</h1>
            <p className="text-xl text-center mb-6">
              안드로이드, ios, 웹 개발자로의 분화
              <br />
              REST API를 만드는 백엔드 개발자와, API를 연동해 화면을 만드는
              프론트엔드 개발자로 분화되기 시작.
              <br />
            </p>
            <div className="flex">
              <Image
                src="/image/flow/andiosweb.png"
                alt="안드로이드, ios, web 아이콘"
                width={600}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <a id="intro11" href="#intro12" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">SPA와 검색엔진</h1>
            <div className="text-xl mb-6 flex justify-between space-x-6">
              <div>
                <h2 className="border-2 w-fit px-2 py-1 rounded-full mb-3 font-bold">
                  SEO
                </h2>
                검색엔진은 문서는 크롤링할 수 있지만 앱은 크롤링할 수 없다
                <br />
                무엇을 이 페이지의 내용이라고 할 것인가
                <br />
                크롤러 만든 입장에서 비용이 높아짐.
              </div>
              <div>
                <h2 className="border-2 w-fit px-2 py-1 rounded-full mb-3 font-bold">
                  성능
                </h2>
                크롤링을 위해 첫페이지에 진입할때 앱 전체를 다운받게 된다.
                <br />
                서버비 증가, 속도 느려짐.
                <br />
              </div>
            </div>

            <div className="flex">
              <Image
                src="/image/flow/frameWork.png"
                alt="모던 프론트엔드 프레임워크 로고"
                width={600}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <a id="intro12" href="#intro13" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">
              SSR: 메타프레임워크의 등장
            </h1>
            <p className="text-xl text-center mb-6">
              첫페이지 프리렌더링을 통해 서버에서 HTML을 내려줌
              <br />
              클라이언트에서 자바스크립트를 내려받은 뒤 하이드레이션
              <br />
            </p>
            <div className="flex">
              <Image
                src="/image/flow/next-nuxt.png"
                alt="next와 nuxt의 로고"
                width={600}
                height={37}
              />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <a id="intro13" href="#intro14" className="flex justify-end">
            <Image
              src="/image/flow/arrow.svg"
              alt="다음 슬라이드로"
              width={30}
              height={30}
            />
          </a>
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">Next.js & Nuxt.js</h1>
            <p className="text-xl text-center mb-6">
              파일 기반 라우팅 시스템 내장
              <br />
              CSR, SSR, ISR등의 다양한 렌더링 방식 지원
              <br />
              TypeScript 지원과 Tailwind 지원
              <br />
              Code Spliting
            </p>
            <div className="flex">
              <Link
                href="/"
                className="group rounded-lg border border-transparent mx-8 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  SEO와 Next.js 소개
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontendFlow;
