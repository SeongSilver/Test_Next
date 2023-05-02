import React from 'react';
import Image from 'next/image';
import SliderContainer from '../common/SliderContainer';

function SEOIntroduce() {
  return (
    <SliderContainer>
      {/* ===========================  1번째 슬라이드  =========================== */}
      <div className="slider ">
        <div>
          <h1 className="mb-12 text-xl font-semibold text-center">
            검색 결과 페이지에 홈페이지, 컨텐츠를 노출시키는 방법
          </h1>
          <div className="flex mb-12">
            <div className="w-1/2 pl-48">
              <Image
                src="/image/SEO/chickensearch.png"
                alt="googlesearch"
                width={500}
                height={1000}
              />
            </div>
            <div className="w-1/2">
              <section className="m-12 pl-12">
                <h1 className="text-xl font-semibold mb-4 text-red-700">
                  광고
                </h1>
                <ul>
                  <li>노출속도가 매우 빠르다</li>
                  <li>검색결과를 최상단에 위치시킬 수 있다</li>
                  <li>유지 비용이 비싸다</li>
                </ul>
              </section>
              <section className="m-12 pl-12">
                <h1 className="text-xl font-semibold mb-4 text-blue-700">
                  SEO
                </h1>
                <ul>
                  <li>노출 순위를 올리는데 다소 시간이 필요</li>
                  <li>지속적인 노출이 가능하다</li>
                  <li>비용이 들지 않는다</li>
                </ul>
              </section>
            </div>
          </div>
          <p className="mt-4 text-lg text-center">
            검색결과에서 광고를 클릭하는 비율은 최대 3%에 불과하다.&emsp;-Google
            Ads-
          </p>
        </div>
      </div>
      {/* ===========================  2번째 슬라이드  =========================== */}
      <div className="slider text-center">
        <div>
          <p className="text-xl font-semibold">
            Search 검색 / Engine 엔진 / Optimization 최적화
          </p>
          <br/>
          <p>
            검색 사용자의 검색 의도에 맞게 검색엔진을 최적화 하여<br/>
            검색엔진의 평가를 높여 페이지 노출을 높이고<br/>
            자사의 홈페이지 혹은 콘텐츠를 검색 결과의 상단에 위치시키는 작업<br/>
          </p>
          <br />
          <br />
          <Image
            src="/image/SEO/seo.png"
            alt="SEO 설명"
            width={540}
            height={540}
            className="ml-[calc(50%-270px)]"
            />
        </div>
      </div>
      {/* ===========================  3번째 슬라이드  =========================== */}
      <div className="slider">
          <header className="text-center my-4 text-2xl font-semibold">
          <h1>SEO가 중요한 이유</h1>
          </header>
          <div className="text-center">
            <p className="my-12">1. 30%의 사용자들은 첫 번째 검색 결과를 클릭한다<br/><br/> → 시간과 돈을 투자하며 광고를 진행</p>
            <p className="my-12">2. 검색 결과 첫번째 페이지 안에 들지 못하면 사실상 사람들에게 거의 노출되지 못한다<br/><br/>
              → 검색 결과에서 대부분 첫번째 페이지 혹은 한 번의 스크롤로 끝내는 사람이 많다<br/>
              (단 9%만이 스크롤을 내리고, 15%만이 원하는 다른 키워드를 이용하여 검색을 한다고함)
            </p>
            <p>3. 홈페이지의 디자인이 별로여도 검색 결과 상위권에 노출되는 아무 문제가 없다<br/><br/>
              → 단, 홈페이지 내용이 부실하면 유입 후 이탈률이 높아진다</p>
            <footer className="mt-16 text-xl font-bold">
              검색 결과에서 얼마나 노출이 잘 되느냐의 문제는 마케팅으로 이어진다
              &emsp;→&emsp; 검색 순위 랭킹 올리기
            </footer>
          </div>
        </div>
      {/* ===========================  4번째 슬라이드  =========================== */}
      <div className="slider">
        <header className="text-center my-4 text-xl font-semibold">
          <h1>알아두면 이해하기 편한 SEO관련 단어들</h1>
        </header>
        <div className="flex justify-center">
          <div className="w-[30%] h-[50vh] bg-slate-50 m-4 p-8 rounded-[20px]">
            <h1 className="text-xl font-semibold mb-4">크롤러</h1>
            <p>온라인에 문서를 수집하는 과정</p>
            <br/>
            <ul>
              <li>- 인터넷에서 웹 페이지를 수집하고 분석하는 프로세스</li>
              <li>- 엔진이 웹 페이지를 인덱싱하고 검색 결과를 제공하는데 사용</li>
            </ul>
          </div>
          <div className="w-[30%] h-[50vh] bg-slate-50 m-4 p-8 rounded-[20px]">
            <h1 className="text-xl font-semibold mb-4">색인(Indexing)</h1>
            <p>주제별 백과사전 형태로 등록하는 과정</p>
            <br/>
            <ul>
              <li>- 검색 엔진이 문서를 검색 가능한 데이터로 변환하는 과정</li>
              <li>- 검색 엔진은 크롤링을 통해 수집한 웹 페이지를 분석하여 적절한 색인 구조를 만듦</li>
              <li>- 검색 의도에 맞춰 색인된 콘텐츠에 순위를 부여한 결과로 제공</li>
            </ul>
          </div>
          <div className="w-[30%] h-[50vh] bg-slate-50 m-4 p-8 rounded-[20px]">
            <h1 className="text-xl font-semibold mb-4">메타태그</h1>
            <p>HTML 문서의 head 부분에 위치<br/> 문서의 데이터를 정의하는 태그</p>
            <br/>
            <ul>
              <li>- 문서의 정보를 설명하는 데이터(제목, 작성자, 키워드, 설명 등)</li>
              <li>- 검색 엔진이 웹 페이지를 색인할 떄, 페이지의 내용을 이해하고 검색 결과에 표시하는데에도 사용</li>
              <li>- 페이지의 키워드와 설명을 정의하는 메타 태그는 검색 엔진이 페이지를 분석하는데 도움을 줌</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ===========================  4번째 슬라이드  =========================== */}
    </SliderContainer>
  );
}

export default SEOIntroduce;