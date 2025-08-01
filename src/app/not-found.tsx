import Head from 'next/head';

export default function NotFound() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20'>
      <Head>
        <title>Charles Patterson&apos;s Personal Site - 404</title>
      </Head>
      <h2 className=''>Not Found</h2>
      <p>Congratulations, you found my 404 not-found page!</p>
    </div>
  );
}
