import Head from 'next/head';

export default function NotFound() {
  return (
    <div className='font-inter grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20'>
      <Head>
        <title>Charles Patterson&apos;s Personal Site - 404</title>
      </Head>
      <h2 className='text-2xl'>Page Not Found</h2>
    </div>
  );
}
