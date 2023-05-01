import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SliderContainer from '../common/SliderContainer';

function SEOManual() {
  return (
    <div>
      <SliderContainer>
        <div className="slider">
          <header className="text-center my-4 text-xl font-semibold">
          <h1>대형 검색 포털사이트에서는 다음과 같이 SEO 가이드를 제시한다 (구글 / 네이버)</h1>
          </header>
          <div className="flex justify-center">
          <Link href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko" target="_blank">
            <Image
              src="/image/SEO/googleSEO.png"
              alt="SEO 설명"
              width={540}
              height={540}
              className="m-8"
              />
              <p className="text-center">구글 SEO 최적화 가이드</p>
          </Link>
          <Link href="https://searchadvisor.naver.com/guide/seo-basic-intro"  target="_blank">
            <Image
              src="/image/SEO/naverSEO.png"
              alt="SEO 설명"
              width={540}
              height={540}
              className="m-8"
              />
              <p className="text-center">네이버 SEO 최적화 가이드</p>
          </Link>
          </div>
          <div className='mt-8 text-center'>
            <p></p>
          </div>
        </div>
        <div className="slider">
          <div className="flex justify-center">
            <div className="w-1/3 m-16 p-4">
              <h1 className="text-center my-8 text-xl font-semibold">1. 문법에 맞는 HTML 작성하기</h1>
              <p>&lt;title&gt; 태그에는 사이트 제목을 기재하고,<br/> &lt;div&gt; 태그를 사용해 줄을 바꾸고
                &lt;strong&gt;과 &lt;em&gt; 태그를 활용해 <br/>강조하고 싶은 키워드에 붙이는 등 
                적절한 HTML 소스로 홈페이지를<br/> 구성하는 것은 결과적으로 검색엔진에게도 이해하기 쉬운 <br/>웹 문서가 되고,
                유사한 내용의 웹 문서가 있을 경우 <br/>상대적으로 문서의 순위가 높아진다
              </p>
            </div>
            <div className="w-1/3 m-16 p-4">
              <h1 className="text-center my-8 text-xl font-semibold">2. 구체적인 페이지 제목 만들기</h1>
              <p>
                HTML 문서의 헤더에 들어가는 페이지 제목(title)은 구체적이고 간결하게 구성 
                검색결과 화면에서 텍스트가 잘리지 않도록 해야한다.<br/><br/>
                - 반복적이고 틀에 박힌 제목 삼가<br/>
                - 제목의 시작이나 끝에 사이트 이름을 포함하고 나머지 제목은 하이픈(-), 콜론(:), 막대(|) 사용<br/><br/>
                (예) 디윅스 - 인공지능, 빅데이터
              </p>
            </div>
          </div>
        </div>
        <div className="slider">
          <div>
            <h1 className="text-center my-4 text-xl font-semibold">3. 메타 태그 활용하기</h1>
            <p className="text-center">
              네이버, 구글과 같은 포털 사이트의 검색엔진 봇은 메타태그를 수집하여 사용자에게 필요한 정보를 제공한다
            </p>
            <div className="flex justify-center">
              <div className="m-4 p-4">
                <h1 className="text-center my-8 text-xl font-semibold">SEO를 위한 가장 중요한 메타 태그</h1>
                <Image
                src="/image/SEO/metaTag.png"
                alt="metaTag"
                width={600}
                height={540}
                  />
                <br/>
                <p>
                  - description : 페이지에 대한 짧고 정확한 요약<br/>
                  - author : 문서 저작자<br/>
                  - keywords : 페이지의 콘텐츠와 관련된, 쉼표로 구분한 키워드 목록(SNS의 해시태그)<br/>
                  - robots : 협조적인 크롤러, 또는 '로봇'의 동작을 지정한다.
                </p>
              </div>
              <div className="m-4 p-4">
                <h1 className="text-center my-8 text-xl font-semibold">오픈 그래프 (open graph)</h1>
                <div className="flex">
                  <Image
                  src="/image/SEO/openGraph.png"
                  alt="metaTag"
                  width={400}
                  height={540}
                  />
                  <p className="ml-8 flex items-center">
                    메타태그 표기방법 중 <br/>페이스북의 오픈 그래프 프로토콜<br/><br/>
                    meta 태그의 name 대신 <br/>property 속성을 사용해서<br/> op:title/description/image/url<br/> 등으로 사용한다<br/><br/>
                    SNS상에서 미리보기를 통해 보는<br/>제목, 설명, url, 이미지를 확인할 수 있다
                  </p>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="flex justify-center">
            <div className="w-1/3 m-16 p-4">
              <h1 className="text-center my-8 text-xl font-semibold">4. 이미지에 alt 속성 기재</h1>
              <p>
                alt 속성이란 alternative의 의미로 이미지가 로딩되지 못했을 때 <br/>대신 표시되는 텍스트이다.<br/>
                기업명 / 로고 / 배너 / 상품명 / 카피 등을 이미지로 표현할 때 <br/>반드시 alt속성을 넣어 기재해야 한다<br/><br/>
                
                alt속성을 붙이면 HTML 코딩과 유용성 측면에서 좋고,<br/>
                시각장애인용 스크린리더가 사용될 때 이미지 대신<br/>
                ALT속성 값을 읽어 대략 어떤 이미지인지 파악할 수록 도움을 준다.<br/>
                검색엔진 또한 이미지를 발견하면 ALT속성 안의 텍스트를 통해 텍스트 색인 작업을 하기 떄문에 SEO에 좋다.
                
              </p>
            </div>
            <div className="w-1/3 m-16 p-4">
              <h1 className="text-center my-8 text-xl font-semibold">5. 이미지 맵에 중요한 링크 사용 피하기</h1>
              <p>
               이미지 맵은 &lt;map&gt; 태그와 &lt;area&gt; 태그를 이용해<br/>
               한 장의 사진에 여러 개의 링크를 설치하는 것이다<br/>
               이미지 맵은 검색 엔진이 링크를 따라 이동할 때 방해가 될 수 있으므로<br/>
               중요한 링크 설치는 피하는 것이 좋다<br/><br/>

               (예) 여러 카테고리나 메뉴를 하나의 큰 이미지에 들어가게 만들고<br/>
               각 부분을 클릭하면 해당 페이지로 이동하도록 만든 사이트<br/>
              </p>
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="flex justify-center">
            <div className="w-1/3 m-16 p-4">
              <h1 className="text-center my-8 text-xl font-semibold">6. a(anchor)태그를 활용한 적절한 키워드 배치</h1>
              <p>
               키워드가 본문에 기술되어 있지 않은 홈페이지는<br/> 검색 결과에 랭크되기 어렵다.<br/>
               구글의 경우 '앵커 텍스트(링크 위에 있는 설명 문구)' 링크로 <br/>
               해당 페이지에 키워드가 포함되어 있는지 체크하기도 한다.<br/><br/>

              (예) &lt;a href="http://www.dweax.com"&gt;디윅스 바로가기&lt;/a&gt;<br/>
              &lt;a href="http://www.dweax.com/ai_solution"&gt;디윅스의 인공지능 솔루션&lt;/a&gt;<br/>
              앵커텍스트 : 디윅스 바로가기, 디윅스의 인공지능 솔루션<br/><br/>

              이처럼 앵커태그 및 앵커텍스트로 삽입하면 SEO에 도움이 된다
            
              </p>
            </div>
            <div className="w-1/3 m-8 p-4">
              <h1 className="text-center my-8 text-xl font-semibold">7. 모든 페이지가 유입 페이지가 되도록 사이트 구성</h1>
              <p>
                사용자가 꼭 홈페이지의 메인 페이지만 방문하는 것이 아니다<br/>
                Google에서 키워드나 내용으로 검색하면<br/>
                검색 결과에는 원하는 정보가 있는 콘텐츠 페이지가 나타나고<br/>
                클릭하면 해당 페이지로 유입된다<br/><br/>

                홈페이지 내 어떤 페이지로 방문이 유입될지 모르기 때문에 <br/>
                모든 페이지에는 메인 페이지로 이동할 수 있는 링크를 설치해 <br/>
                전체 사이트의 동선을 개선하는 것이 무엇보다 중요하다<br/>
              </p>
              <h1 className="text-center my-8 text-xl font-semibold">8. HTTPS 사용 권장</h1>
              <p>
                동일 사이트라면 http로 서비스하는 것보다 https로 서비스 할 경우 <br/>
                구글 검색엔진에서 전체 점수의 약 1%정도에 해당하는<br/> 랭킹 가산점을 부여한다
              </p>
            </div>
          </div>
        </div>
      </SliderContainer>
    </div>
  );
}

export default SEOManual;
