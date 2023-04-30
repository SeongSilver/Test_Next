import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
// import { AppContext, AppInitialProps, AppProps } from 'next/app';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// //모든 페이지가 서버사이드렌더링되도록 하는 설정
// App.getInitialProps = async (
//   appContext: AppContext
// ): Promise<AppInitialProps> => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };
