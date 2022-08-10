import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main>
        {/* Banner */}
        <section>{/* Row */}</section>
        {/* Modal */}
      </main>
    </div>
  );
};

export default Home;
