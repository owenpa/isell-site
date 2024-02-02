import phone from './assets/frontfacingphone.png';

function Features() {
  return (
    <div id="features-container">
      <div id="features-left">
        <img id="front-facing-phone" src={phone} alt="Front facing blank iPhone" />
      </div>
      <div id="features-right">
        <p className="container-title">FEATURES</p>
        <h2>Prominent feature A</h2>
        <p className="faint-description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        <div id="features-list">
          <p>1</p>
          <div id="features-list-item">
            <p>Feature title</p>
            <p className="faint-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <p>2</p>
          <div id="features-list-item">
            <p>Feature title</p>
            <p className="faint-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <p>3</p>
          <div id="features-list-item">
            <p>Feature title</p>
            <p className="faint-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
