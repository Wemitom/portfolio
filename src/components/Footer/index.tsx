import { ReactComponent as GithubLogo } from '../../assets/github.svg';
import { ReactComponent as Telegram } from '../../assets/telegram.svg';
import { ReactComponent as Download } from '../../assets/download.svg';

const Footer = () => {
  return (
    <footer className=" flex w-4/5 justify-center">
      <div className="w flex h-auto w-4/5 flex-row justify-around py-6">
        <a
          href="https://github.com/Wemitom"
          target="_blank"
          className="flex cursor-pointer flex-col items-center"
        >
          <GithubLogo width="48px" height="48px" className="dark:invert" />
          <p>Github</p>
        </a>
        <a
          href="https://t.me/wemitom"
          target="_blank"
          className="flex cursor-pointer flex-col items-center"
        >
          <Telegram width="48px" height="48px" className="dark:invert" />
          <p>Telegram</p>
        </a>
        <a
          href="resume.pdf"
          download=""
          className="flex cursor-pointer flex-col items-center"
        >
          <Download width="48px" height="48px" className="dark:invert" />
          <p>Резюме</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
