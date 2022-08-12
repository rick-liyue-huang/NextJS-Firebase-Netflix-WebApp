import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

export const Plans = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Head>
        <title>Plans Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="netflix"
            width={150}
            height={150}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>
    </div>
  );
};
