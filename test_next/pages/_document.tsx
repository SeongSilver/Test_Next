import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <link
        rel="stylesheet"
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
      />
      <title>디윅스 프론트엔드</title>
      <Head>
        <meta name="description" content="디윅스 프론트엔드 페이지입니다." />
        <meta name="author" content="seongeun&gahyun" />
        <meta
          name="keyword"
          content="dweax, frontend, dweax_frontend, 디윅스"
        />
        <meta property="og:title" content="디윅스 프론트엔드" />
        <meta property="og:image" content="/dweax_logo_1.png" />
        <meta
          property="og:description"
          content="디윅스 프론트엔드 파트 발표를 위한 페이지"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
