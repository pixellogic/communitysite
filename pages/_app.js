import '../styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Education and Sports Development Group</title>
        <link rel='icon' type='image/x-icon' href='favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
