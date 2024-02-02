/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer() {
  return (
    <div id="footer-container">
      <footer>
        <div>
          <ul>
            <li className="bold-text">Typical Footer Content</li>
            <li><a>About</a></li>
            <li><a>FAQ</a></li>
            <li><a>Careers</a></li>
            <li><a>Contact Us</a></li>
            <li><a>Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="bold-text">Tech Stack Used</li>
            <li><a>JavaScript</a></li>
            <li><a>HTML</a></li>
            <li><a>React.js</a></li>
            <li><a>SASS / SCSS</a></li>
            <li><a>VS Code</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="bold-text">Notice:</li>
            <li><a>Nothing in the</a></li>
            <li><a>footer should</a></li>
            <li><a>do anything in</a></li>
            <li><a>the demo.</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <form action="">
              <label htmlFor="email" className="bold-text">Enter your email:</label>
              <input type="email" id="email" name="email" className="email-input" />
              <input type="button" className="email-button" value="Subscribe" />
            </form>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
