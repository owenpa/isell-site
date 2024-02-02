function Pricing() {
  return (
    <div id="pricing-container">
      <div id="grid-left">
        <p className="container-title">PRICING TIERS</p>
        <h2 style={{ display: 'inline' }}>Tier X </h2>
        <p style={{ display: 'inline' }} className="faint-text"> replace $$$ with icons</p>
        <p>This is a brief list of features that are offered by tier X</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div id="grid-image-right">
        <div id="tier-grid">
          <button id="iron-button" type="submit">Iron</button>
          <button id="silver-button" type="submit">Silver</button>
          <button id="gold-button" type="submit">Gold</button>
          <button id="platinum-button" type="submit">Platinum</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
