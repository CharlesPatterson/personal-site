import Image from 'next/image';

const companies = [
  {
    name: 'Under Armour',
    industry: 'E-Commerce',
    url: 'https://en.wikipedia.org/wiki/Under_Armour',
  },
  {
    name: 'Compass Learning / Edgenuity',
    industry: 'EdTech',
    url: 'https://www.imaginelearning.com/',
  },
  {
    name: 'Springbox',
    industry: 'Digital Marketing',
    url: 'https://www.linkedin.com/company/springbox',
  },
  {
    name: 'E2open',
    industry: 'Supply Chain management',
    url: 'https://www.e2open.com/',
  },
];

export default function About() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center font-sans'>
      <main className='row-start-2 m-5 flex flex-col items-center gap-[32px]'>
        <h2 className='text-8xl [text-shadow:_0_4px_8px_rgba(128,128,128,0.6)]'>
          <a
            href='https://www.linkedin.com/in/charles-patterson-fullstack-engineer/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Charles Patterson
          </a>
        </h2>
        <Image
          alt='Picture of Charles Patterson wearing headphones'
          className='flex flex-auto'
          src='/ProfilePicture.png'
          width='300'
          height='100'
        ></Image>
        <div>
          <p>
            Hello there! I&apos;m a software engineer with 10+ years of industry
            experience and 3+ years experience leading development teams.
          </p>
          <br />
          <p>
            My career has been as a generalist that has worked across the full
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
            {companies.map(({ name, industry, url }) => {
              return (
                <li key={name}>
                  <a href={url} target='_blank' rel='noopener noreferrer'>
                    {name} - {industry}
                  </a>
                </li>
              );
            })}
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
