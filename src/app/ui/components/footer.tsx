import Image from "next/image";

export default function Footer() {
  return (
    <footer className="font-mono row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a
        href="https://github.com/ua-cpatterson"
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github-octocat-svgrepo-com.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/charles-patterson-fullstack-engineer/"
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/linkedin-color-svgrepo-com.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        LinkedIn
      </a>
      <p>&copy; {new Date().getFullYear()} Charles Patterson</p>
    </footer>
  );
}
