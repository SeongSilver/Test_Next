import React from 'react';
import Image from 'next/image';
import SliderContainer from '../common/SliderContainer';

function SEOIntroduce() {
  return (
    <SliderContainer>
      <div className="slider">
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
      <div className="slider">
        <div>
          <p>
            자사의 홈페이지 혹은 콘텐츠를 검색 결과의 상단에 위치시키는 작업
          </p>
          <br />
          <Image
            src="/image/SEO/seo.png"
            alt="SEO 설명"
            width={600}
            height={540}
          />
          <br />
          <p>
            검색 결과에서 얼마나 노출이 잘 되느냐의 문제는 마케팅으로 이어진다
            &emsp;=&emsp; 검색 순위 랭킹 올리기
          </p>
        </div>
      </div>
      <div className="slider">33</div>
      <div className="slider">출처</div>
    </SliderContainer>
  );
}

export default SEOIntroduce;
