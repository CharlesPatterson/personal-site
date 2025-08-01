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
        <div>
          <p>
            I&apos;m a software engineer with over 10+ years of industry
            experience and 3+ years experience leading development teams.
          </p>
          <p>
            My background is as a generalist that has worked across the full
            stack: from front-end to back-end to builds and infrastructure.
          </p>
          <br />
          <p>
            I currently live in Bellevue, Washington with my girlfriend and our
            three cats.
          </p>
          <br />
          <span className='font-bold'>
            Companies and Industries I&apos;ve worked in:
          </span>
          <ol className='list-inside list-disc'>
            <li>Under Armour - E-Commerce</li>
            <li>Springbox - Digital Marketing</li>
            <li>Compass Learning/Edgenuity - EdTech</li>
            <li>E2open - Supply Chain Management</li>
          </ol>
          <br />
          <span className='font-bold'>
            Technologies I&apos;ve enjoyed working with:
          </span>
          <ol className='list-inside list-disc'>
            <li>Languages: Typescript | Javascript | Python</li>
            <li>
              Frameworks/Libraries: Next.js | Express.js | FastAPI | Tailwind |
              React
            </li>
            <li>Builds: Github Actions | Jenkins</li>
            <li>APIs: GraphQL | REST</li>
            <li>Infrastructure / Cloud: AWS, Kubernetes, Docker, Terraform</li>
            <li>Databases/Storage: Postgres | DynamoDB | Redis</li>
            <li>APM: Datadog</li>
          </ol>
          <br />
          <span className='font-bold'>Tools I Frequently Use:</span>
          <ol className='list-inside list-disc'>
            <li>Editors: VS Code | Textmate | VIM</li>
            <li>Devtools: Git | Postman | Chrome DevTools | zsh</li>
            <li>
              Documentation: Swagger | Lucidchart | Excalidraw | Confluence |
              JIRA
            </li>
            <li>Communication: Slack, Outlook</li>
            <li>Microsoft Excel: Tables | Macros | XLookups</li>
          </ol>
          <br />
          <span className='font-bold'>Personal Interests</span>
          <ol className='list-inside list-disc'>
            <li>Rock Climbing</li>
            <li>DIY / Home Improvement</li>
            <li>Improv Comedy</li>
            <li>Cats</li>
            <li>Chess</li>
            <li>Videogames</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
