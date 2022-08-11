import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const loginPage: NextPage = () => {
  return (
    <div className="relative flex w-screen h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Login Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* background image */}
      <Image
        src="/bg-image.webp"
        layout="fill"
        className="-z-10 !hidden opacity-50 sm:!inline"
        objectFit="cover"
      />

      {/* logo image */}
      <img
        src="https://rb.gy/ulxxee"
        alt="logo"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      {/* login/register form */}
      <form className="relative mt-24 space-y-8 rounded bg-black py-10 px-6 md:mt-0 md:max-w-md md:px-14 flex flex-col items-center">
        <p className="text-3xl ">Login Form</p>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="please input email"
              className="input"
            />
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="please input password"
              className="input"
            />
          </label>
        </div>
        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          type="submit"
        >
          Login Now
        </button>
        <div>
          Join Netflix?{' '}
          <button className="text-white hover:underline">Register now</button>
        </div>
      </form>
    </div>
  );
};

export default loginPage;
