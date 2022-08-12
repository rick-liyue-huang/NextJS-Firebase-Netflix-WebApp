import { getProducts, Product } from '@stripe/firestore-stripe-payments';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';
import { Plans } from '../components/Plans';
import { Row } from '../components/Row';
import { useAuth } from '../hooks/useAuth';
import { payments } from '../lib/stripe';
import { Movie } from '../types';
import requests from '../utils/requests';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
  products: Product[];
}

const Home: NextPage<Props> = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  horrorMovies,
  comedyMovies,
  romanceMovies,
  documentaries,
  products,
}) => {
  const { loading } = useAuth();
  const showModal = useRecoilValue(modalState);

  // console.log(products);

  // after login, need to check whether subscription
  const subscription = false;

  if (loading || subscription === null) {
    return null;
  }

  if (!subscription) {
    return (
      <div>
        <Plans products={products} />
      </div>
    );
  }

  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
        showModal && '!h-screen overflow-hidden'
      }`}
    >
      <Head>
        <title>Home Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      <main className="relative pl-3 pb-24 lg:space-y-24 lg:pl-16">
        {/* Banner */}
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-20">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List */}

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
        {/* Modal */}
        {showModal && <Modal />}
      </main>
    </div>
  );
};

export default Home;

/**
 * @define in the home page get all the movies once
 */
export const getServerSideProps: GetServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  // get the firebase products collections
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((err) => console.log(err.message));

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      products: products,
    },
  };
};
