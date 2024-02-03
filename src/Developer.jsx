import me from './assets/me.jpeg';
import htmlLogo from './assets/html.png';
import jsLogo from './assets/javascript.png';
import reactLogo from './assets/react.svg';
import sassLogo from './assets/sass.svg';
import vsLogo from './assets/vscode.png';
import githubLogo from './assets/github.svg';
import linkedinLogo from './assets/linkedin.png';

function Developer() {
  return (
    <div id="developer-container">
      <h1>Brought to you by Owen Hill</h1>
      <img src={me} alt="man smiling" id="self-portrait" />
      <div id="socials-container">
        <a href="https://github.com/owenpa" rel="noreferrer" target="_blank"><img src={githubLogo} alt="github logo" className="tech-logo" /></a>
        <a href="https://www.linkedin.com/in/owenghill/" rel="noreferrer" target="_blank"><img src={linkedinLogo} alt="linkedin logo" className="tech-logo" /></a>
      </div>
      <div id="tech-stack-container">
        <img src={htmlLogo} alt="html logo" className="tech-logo" />
        <img src={jsLogo} alt="javascript logo" className="tech-logo" />
        <img src={reactLogo} alt="react logo" className="tech-logo" />
        <img src={sassLogo} alt="sass logo" className="tech-logo" />
        <img src={vsLogo} alt="vscode logo" className="tech-logo" />
      </div>
    </div>
  );
}

export default Developer;
