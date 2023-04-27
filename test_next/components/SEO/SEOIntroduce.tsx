import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

function SEOIntroduce() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-[70vh]">
      <Slider {...settings}>
        <div className="slider">
          <div className="text-center">
            <h1 className="mb-8">
              검색 결과 페이지에 홈페이지, 컨텐츠를 노출시키는 방법
            </h1>
            <div className="flex mb-6">
              <div className="w-1/2">
                광고
                <ul>
                  <li>노출속도가 매우 빠르다</li>
                  <li>검색결과를 최상단에 위치시킬 수 있다</li>
                </ul>
              </div>
              <div className="w-1/2">SEO</div>
            </div>
          </div>
        </div>
        <div className="slider">
          <div>
            <p>
              자사의 홈페이지 혹은 콘텐츠를 검색 결과의 상단에 위치시키는 작업
            </p>
            <br />
            <Image src="/SEO/seo.png" alt="SEO 설명" width={720} height={540} />
            <br />
            <p>
              검색 결과에서 얼마나 노출이 잘 되느냐의 문제는 마케팅으로 이어진다
              <br />
              =
              <br />
              검색 순위 랭킹 올리기
            </p>
          </div>
          {/* <div className="flex justify-center items-center">
            <div className="w-1/2 p-8">
              <h1>SEO란?</h1>
              <p>
                S : 검색자(유저)의 의도를 이해하고 이에 충실히 맞춰 웹 페이지의
                콘텐츠를 제작하고, 이 페이지가 검색 결과 페이지에서 잘 노출
                되도록 웹페이지의 태그와 링크 구조를 개선하여 자연 유입 트래픽을
                늘리는 방법론
              </p>
            </div>
            <div className="w-1/2 p-8 ">
              <Image
                src="/SEO/seo.png"
                alt="SEO 설명"
                width={720}
                height={540}
              />
            </div>
          </div> */}
        </div>
        <div className="slider">33</div>
        <div className="slider">출처</div>
      </Slider>
    </div>
  );
}

export default SEOIntroduce;
