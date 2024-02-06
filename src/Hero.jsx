import googleBadge from './assets/google-play-badge.png';
import appstoreBadge from './assets/appstore.svg';
import angledPhone from './assets/angledphone.png';

function Hero() {
  return (
    <div id="hero-container" className="reveal-container">
      <div id="left-hero">
        <h1>You should buy this app!</h1>
        <h4>With the features that iSell offers, you&apos;ll be able to increase sales.</h4>
        <div id="hero-app-download">
          <img src={appstoreBadge} id="appstore-badge" alt="Apple Store call-to-action" />
          <img src={googleBadge} id="google-badge" alt="Google Play Store call-to-action" />
          <p className="app-rating">★★★★★</p>
          <p className="app-rating">★★★★☆</p>
        </div>

        <p className="faint-text">(API requests to retrieve and display star ratings)</p>
      </div>
      <img src={angledPhone} id="angled-phone" alt="Angled iPhone displaying nothing" />
    </div>
  );
}

export default Hero;
