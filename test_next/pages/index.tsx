import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/dweax_logo_1.png"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </a>
        </div>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <h1 className="text-4xl font-bold z-[999]">
          프론트엔드 웹 개발 흐름과 Next.js
        </h1>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/Introduce"
          className="group rounded-lg border border-transparent mx-8 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>소개 / 목차</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>소개와 목차</p>
        </Link>
        <Link
          href="/FrontendFlow
          "
          className="group rounded-lg border border-transparent mx-8 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            프론트엔드 웹개발의 흐름
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            프론트엔드 웹개발의 흐름
          </p>
        </Link>
        <Link
          href="/SEOExplanation"
          className="group rounded-lg border border-transparent mx-8 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>SEO 소개</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            SEO 소개와 사용 방법 소개
          </p>
        </Link>
        <Link
          href="/NextExplanation"
          className="group rounded-lg border border-transparent mx-8 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Next.js란</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Next.js에 대한 간단한 설명
          </p>
        </Link>
      </div>
    </main>
  );
}
