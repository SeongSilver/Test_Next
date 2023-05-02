import React from 'react';

function NextLink2() {
  return (
    <div>
      <header className="flex items-center justify-center mb-12">
        <h1 className="text-xl font-semibold mr-16 text-center">
          &lt;Link&gt; 태그의 property
        </h1>
      </header>
      <div className="flex justify-evenl flex-wrap">
        <div className="w-[22vw] h-[20vh] m-4 p-4 bg-white rounded-[15px] shadow-xl">
          <h1>href (필수)</h1>
          <br />
          <p>이동할 경로 혹은 URL</p>
          <p>(예) &lt;Link href="이동할 경로 혹은 URL"&gt;</p>
        </div>
        <div className="w-[22vw] h-[20vh] m-4 p-4 bg-white rounded-[15px] shadow-xl">
          <h1>1. as (option)</h1>
          <br />
          <p>브라우저 창에 표시될 URL</p>
          <p>(예) &lt;Link href="/" as="브라우저 주소창에 표시될 URL"&gt;</p>
        </div>
        <div className="w-[22vw] h-[20vh] m-4 p-4 bg-white rounded-[15px] shadow-xl overflow-auto">
          <h1>2. passHref (option / 기본값 : false)</h1>
          <br />
          <p>next Link에서 하위 컴포넌트로 href 속성을 전달해주는 역할</p>
          <p>
            (예) <br />
            &lt;Link href=&#123;&#123; pathname: 'post', query: &#123; id:
            post_id &#125; &#125;&#125; passHref&gt;
            <br />
            &ensp;&lt;ChildATag&gt;A태그&lt;/ChildATag&gt;// 자식태그가 styled
            component a태그인 경우
            <br /> &lt;/Link&gt;{' '}
          </p>
        </div>
        <div className="w-[16vw] h-[20vh] m-4 p-4 bg-white rounded-[15px] shadow-xl overflow-auto">
          <h1>3. prefetch (option / 기본값 : true)</h1>
          <br />
          <p>- 뷰포트 내의 Link 태그 데이터만 미리 받아온다</p>
          <p>
            - 파일 전체 Link태그가 아닌 '뷰 포트 안의 데이터만 참조'(스크롤 안의
            보이는 요소 기준)
          </p>
          <p>- prefetch=false 설정을 통해 끌 수 있지만 마우서 오버 시 작동</p>
          <p>- production 모드에서만 실행 / 개발모드 확인 불가능</p>
        </div>
        <div className="w-[16vw] h-[20vh] m-4 p-4 bg-white rounded-[15px] shadow-xl">
          <h1>4. replace (option / 기본값 : false)</h1>
          <br />
          <p>- push 대신 replace 하는 속성</p>
          <p>- 뒤로가기 history에 쌓이지 않고 대체된다</p>
          <p>(예) &lt;Link href="/" replace"&gt;</p>
        </div>
        <div className="w-[16vw] h-[20vh] m-4 p-4 bg-white rounded-[15px] shadow-xl">
          <h1>5. scroll (option / 기본값 : true)</h1>
          <br />
          <p>- 화면 이동시 페이지 상단으로 스크롤</p>
          <p>- 스크롤 자동으로 상단으로 올라가는 부분 제거</p>
          <p>(예) &lt;Link href="/" scroll= &#123;false&#125;"&gt;</p>
        </div>
        <div className="w-[16vw] h-[20vh] m-4 p-4 bg-white rounded-[15px] shadow-xl overflow-auto">
          <h1>6. shallow (option / 기본값 : false)</h1>
          <br />
          <p>- 서버단에서 실행되는 메소드들을 재실행하지 않고 이동할지 여부</p>
          <p>
            - getStaticProps, getServerSideProps, getInitialProps를 실행시키지
            않고 현재 URL을 업데이트
          </p>
          <p>- 리렌더링이 일어나지 않음</p>
          <p>(예) &lt;Link href="/" shallow= &#123;true&#125;&gt;</p>
        </div>
      </div>
    </div>
  );
}

export default NextLink2;
