import Image from 'next/image';
import NextLogo from '~icons/logos/nextjs-icon.jsx';
import ReactLogo from '~icons/logos/react.jsx';
import JenkinsLogo from '~icons/logos/jenkins.jsx';
import VisualStudioCodeLogo from '~icons/logos/visual-studio-code.jsx';
import GithubLogo from '~icons/logos/github-octocat.jsx';
import GraphQLLogo from '~icons/logos/graphql.jsx';
import GithubActionsLogo from '~icons/logos/github-actions.jsx';
import TextmateLogo from '~icons/file-icons/textmate.jsx';
import NeoVimLogo from '~icons/devicon/neovim.jsx';
import TypescriptLogo from '~icons/devicon/typescript.jsx';
import JavascriptLogo from '~icons/devicon/javascript.jsx';
import PythonLogo from '~icons/devicon/python.jsx';
import ExpressLogo from '~icons/devicon/express.jsx';
import TailwindCSSLogo from '~icons/devicon/tailwindcss.jsx';
import PostmanLogo from '~icons/devicon/postman.jsx';
import ChromeLogo from '~icons/devicon/chrome.jsx';
import ZshLogo from '~icons/devicon/zsh.jsx';
import SwaggerLogo from '~icons/devicon/swagger.jsx';
import GoLogo from '~icons/devicon/go.jsx';
import FastAPILogo from '~icons/devicon/fastapi.jsx';
import DockerLogo from '~icons/devicon/docker.jsx';
import KubernetesLogo from '~icons/devicon/kubernetes.jsx';
import TerraformLogo from '~icons/devicon/terraform.jsx';
import PostgresqlLogo from '~icons/devicon/postgresql.jsx';
import DynamoDBLogo from '~icons/devicon/dynamodb.jsx';
import RedisLogo from '~icons/devicon/redis.jsx';
import DatadogLogo from '~icons/devicon/datadog.jsx';
import ExcalidrawLogo from '~icons/material-icon-theme/excalidraw.jsx';
import JIRALogo from '~icons/devicon/jira.jsx';
import ConfluenceLogo from '~icons/devicon/confluence.jsx';
import SlackLogo from '~icons/devicon/slack.jsx';
import MicrosoftTeamsLogo from '~icons/logos/microsoft-teams.jsx';
import RestAPILogo from '~icons/dashicons/rest-api.jsx';
import GRPCLogo from '~icons/logos/grpc.jsx';
import CursorAILogo from '~icons/vscode-icons/file-type-cursorrules.jsx';
import CatLogo from '~icons/openmoji/black-cat.jsx';
import ChessLogo from '~icons/la/chess-board.jsx';
import ConstructionLogo from '~icons/material-symbols/construction.jsx';
import ComedyLogo from '~icons/mdi/comedy.jsx';
import MicrosoftExcelLogo from '~icons/vscode-icons/file-type-excel.jsx';
import LucidChartLogo from '~icons/flat-color-icons/line-chart.jsx';
import RockClimbingLogo from '~icons/map/climbing.jsx';
import VideogamesLogo from '~icons/arcticons/games.jsx';
import AWSLogo from '~icons/logos/aws.jsx';
import PagerdutyLogo from '~icons/logos/pagerduty.jsx';

const companies = [
  {
    name: 'Under Armour',
    industry: 'E-Commerce',
    url: 'https://en.wikipedia.org/wiki/Under_Armour',
  },
  {
    name: 'Compass Learning / Edgenuity',
    industry: 'Ed-Tech',
    url: 'https://www.imaginelearning.com/',
  },
  {
    name: 'Springbox',
    industry: 'Digital Marketing',
    url: 'https://www.linkedin.com/company/springbox',
  },
  {
    name: 'E2open',
    industry: 'Supply Chain',
    url: 'https://www.e2open.com/',
  },
];

export default function About() {
  return (
    <div className='font-inter grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center'>
      <main className='row-start-2 m-5 flex flex-col items-center gap-[32px]'>
        <h2 className='text-6xl [text-shadow:_0_4px_8px_rgba(128,128,128,0.6)]'>
          <a
            href='https://www.linkedin.com/in/charles-patterson-fullstack-engineer/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Charles Patterson
          </a>
        </h2>
        <div className='fade-in'>
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
          <span className='font-bold'>Companies / Industries</span>
          <ol>
            {companies.map(({ name, industry, url }) => {
              return (
                <li key={name} className='ml-5'>
                  <a href={url} target='_blank' rel='noopener noreferrer'>
                    <span className='italic'>{name}</span> <br />
                    <span className='ml-5'>{industry}</span>
                  </a>
                </li>
              );
            })}
          </ol>
          <br />
          <span className='font-bold'>Technologies</span>
          <ol className='ml-5'>
            <li>
              <h3 className='italic'>Languages</h3>{' '}
              <p className='mb-2 ml-5'>
                Typescript <TypescriptLogo className='inline-block' /> |
                Javascript <JavascriptLogo className='inline-block' /> | Golang{' '}
                <GoLogo className='inline-block' /> | Python{' '}
                <PythonLogo className='inline-block' />{' '}
              </p>
            </li>
            <li>
              <h3 className='italic'>Frameworks/Libraries</h3>
              <p className='mb-2 ml-5'>
                Next.js <NextLogo className='inline-block' /> | Express.js{' '}
                <ExpressLogo className='inline-block' /> | FastAPI{' '}
                <FastAPILogo className='inline-block' /> | Tailwind{' '}
                <TailwindCSSLogo className='inline-block' /> | React{' '}
                <ReactLogo className='inline-block' />
              </p>
            </li>
            <li>
              <h3 className='italic'>APIs</h3>
              <p className='mb-2 ml-5'>
                GraphQL <GraphQLLogo className='inline-block' /> | REST{' '}
                <RestAPILogo className='inline-block' /> |{' '}
                <GRPCLogo className='inline-block' />
              </p>
            </li>
            <li>
              <h3 className='italic'>Builds</h3>
              <p className='mb-2 ml-5'>
                Github Actions <GithubActionsLogo className='inline-block' /> |
                Jenkins <JenkinsLogo className='inline-block' />
              </p>
            </li>
            <li>
              <h3 className='italic'>Databases/Storage</h3>
              <p className='mb-2 ml-5'>
                Postgres <PostgresqlLogo className='inline-block' /> | DynamoDB{' '}
                <DynamoDBLogo className='inline-block' /> | Redis{' '}
                <RedisLogo className='inline-block' />
              </p>
            </li>
            <li>
              <h3 className='italic'>Cloud Services / Infrastructure</h3>{' '}
              <p className='mb-2 ml-5'>
                <AWSLogo className='inline-block' /> | Kubernetes{' '}
                <KubernetesLogo className='inline-block' /> | Docker{' '}
                <DockerLogo className='inline-block' /> | Terraform{' '}
                <TerraformLogo className='inline-block' />
              </p>
            </li>
            <li>
              <h3 className='italic'>APM</h3>
              <p className='ml-5'>
                Datadog <DatadogLogo className='inline-block' /> |{' '}
                <PagerdutyLogo className='inline-block' />
              </p>
            </li>
          </ol>
          <br />
          <span className='font-bold'>Tools</span>
          <ol className='ml-5'>
            <li>
              <h3 className='italic'>Editors</h3>
              <p className='mb-2 ml-5'>
                CursorAI <CursorAILogo className='inline-block' /> | VS Code{' '}
                <VisualStudioCodeLogo className='inline-block' /> | NeoVIM{' '}
                <NeoVimLogo className='inline-block' /> | Textmate{' '}
                <TextmateLogo className='inline-block' />
              </p>
            </li>
            <li>
              <h3 className='italic'>DevTools</h3>
              <p className='mb-2 ml-5'>
                Git <GithubLogo className='inline-block' /> | Postman{' '}
                <PostmanLogo className='inline-block' /> | Chrome DevTools{' '}
                <ChromeLogo className='inline-block' /> | zsh{' '}
                <ZshLogo className='inline-block' />
              </p>
            </li>
            <li>
              <h3 className='italic'>Documentation</h3>
              <p className='mb-2 ml-5'>
                Swagger <SwaggerLogo className='inline-block' /> | Lucidchart{' '}
                <LucidChartLogo className='inline-block' /> | Excalidraw{' '}
                <ExcalidrawLogo className='inline-block' /> | Confluence{' '}
                <ConfluenceLogo className='inline-block' /> | JIRA{' '}
                <JIRALogo className='inline-block' /> | Excel{' '}
                <MicrosoftExcelLogo className='inline-block' />
              </p>
            </li>
            <li>
              <h3 className='italic'>Communication</h3>
              <p className='mb-2 ml-5'>
                Slack <SlackLogo className='inline-block' /> | Microsoft Teams{' '}
                <MicrosoftTeamsLogo className='inline-block' />
              </p>
            </li>
          </ol>
          <br />
          <span className='font-bold'>Interests</span>
          <ol>
            <li className='ml-5'>
              Rock Climbing <RockClimbingLogo className='inline-block' /> | DIY{' '}
              <ConstructionLogo className='inline-block' /> | Improv Comedy{' '}
              <ComedyLogo className='inline-block' /> | Cats{' '}
              <CatLogo className='inline-block' /> | Chess{' '}
              <ChessLogo className='inline-block' /> | Videogames{' '}
              <VideogamesLogo className='inline-block' />
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
