/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer() {
  return (
    <div id="footer-container">
      <footer>
        <div>
          <ul>
            <li className="bold-text">Typical Footer Content</li>
            <li><a href="#">About</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="bold-text">Tech Stack Used</li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">React.js</a></li>
            <li><a href="#">SASS / SCSS</a></li>
            <li><a href="#">VS Code</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="bold-text">Notice:</li>
            <li><a href="#">Nothing in the</a></li>
            <li><a href="#">footer should</a></li>
            <li><a href="#">do anything in</a></li>
            <li><a href="#">the demo.</a></li>
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
