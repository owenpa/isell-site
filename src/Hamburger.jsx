import { useState } from 'react';
import hamburgerMenu from './assets/hamburgermenu.png';
import xMenu from './assets/xmenu.png';

function Hamburger() {
  const [displayHamburgerContent, setDisplayHamburgerContent] = useState(false);

  return (
    <div id="hamburger-container">
      <button type="button" onClick={() => setDisplayHamburgerContent(!displayHamburgerContent)}>
        { displayHamburgerContent
          ? (
            <img src={xMenu} alt="close menu" id="x-menu" />
          )
          : <img src={hamburgerMenu} alt="hamburger menu" id="hamburger-menu" /> }
      </button>
      { displayHamburgerContent
        ? (
          <ul>
            <h3>iSell Demo</h3>
            <li><a href="#hero-container">Home</a></li>
            <li><a href="#features-container">Features</a></li>
            <li><a href="#pricing-container">Pricing</a></li>
            <li><a href="#about-container">About</a></li>
            <li><a href="#developer-container">Developer</a></li>
          </ul>
        )
        : null}

    </div>
  );
}

export default Hamburger;
