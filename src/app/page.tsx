import Image from 'next/image';

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center font-sans'>
      <main className='row-start-2 flex flex-col items-center gap-[32px]'>
        <Image
          alt='Picture of Charles Patterson wearing headphones'
          className='flex flex-auto border-2 border-solid border-black'
          src='/ProfilePicture.png'
          width='300'
          height='100'
        ></Image>
        <p>
          I'm a software engineer with over 10+ years of experience as an
          engineer and 3+ years experience leading development teams.
        </p>
        <p>
          Technologies I enjoy working with:
          <ol>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Typescript/Javascript</li>
            <li>GraphQL</li>
            <li>Python</li>
            <li>AWS</li>
            <li>Postgres</li>
          </ol>
          <br />
          Tools I Enjoy:
          <ol>
            <li>VS Code</li>
            <li>VIM</li>
            <li>Postman</li>
            <li>zsh</li>
            <li></li>
            <li></li>
          </ol>
        </p>
      </main>
    </div>
  );
}
