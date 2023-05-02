import React, {useState} from 'react';
import Image from 'next/image';

function Next13Function() {
  const [check, setCheck] = useState<boolean>(false);

  const ImageToggle = () => {
    setCheck(!check);
  }
  return (
    <div>
      <h1 className="text-xl text-center font-semibold">
        Data Fetching
      </h1>
      <div className="flex justify-evenly mt-4">
        <div className="w-[30vw] h-full">
          <p className="mb-2">- 이전 Next.js에서는 데이터를 fetching 해서 가져올 때, getServerSideProps나 getStaticProps를 통해 데이터를 가져왔다.</p>
          <Image src="/image/Next.js/Next13/getServerSideProps.png" alt="getServerSideProps" width={450} height={100}/>
          <Image src="/image/Next.js/Next13/static.png" alt="getServerSideProps" width={450} height={100} className="mt-2"/>
          <p className="mt-2">- Next.js 부터는 위와 같은 Data Fetching 문법을 사용하면 에러가 발생한다 </p>
        </div>
          {check && <Cache/>}
        <div className="w-[30vw] h-full">
          <p className="mb-2">- 아래와 같이 getData 함수를 선언 후 React에서 가져온 기능인 use()안에 넣어주기만 하면된다.</p>
          <Image src="/image/Next.js/Next13/use.png" alt="use" width={450} height={100}/>
          <p className="my-2">-아래와 같이 fetch 구문의 두번째 매개변수로 <span onMouseOver={ImageToggle} onMouseLeave={ImageToggle}>cache:' ' </span>객체를 넣어줄 수 있는데 안에 무엇이 들어가냐에 따라 getServerSideProps, getStaticProps와 유사한 기능을 한다</p>
          <Image src="/image/Next.js/Next13/cache.png" alt="use" width={450} height={100}/>
        </div>
      </div>
    </div>  
  );
}

function Cache(){
  return(
    <div className="absolute bg-white p-8 cursor-pointer">
    <Image src="/image/Next.js/Next13/cacheEx.png" alt="use" width={450} height={100} />
    </div>
  )
}

export default Next13Function;
