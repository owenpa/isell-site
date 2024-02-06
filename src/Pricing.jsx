import { useState } from 'react';

function Pricing() {
  const possibleTierDescriptions = {
    'iron-button': ['Iron', 'Feature list for iron'],
    'silver-button': ['Silver', 'Silver feature list'],
    'gold-button': ['Gold', 'Gold button feature list'],
    'platinum-button': ['Platinum', 'Highest tier platinum feature list'],
  };
  const [displayedTier, setDisplayedTier] = useState('iron-button');

  return (
    <div id="pricing-container" className="reveal-container">
      <div id="grid-left">
        <p className="container-title">PRICING TIERS</p>
        <h2 style={{ display: 'inline' }}>
          Tier&nbsp;
          {possibleTierDescriptions[displayedTier][0]}
        </h2>
        <p>{possibleTierDescriptions[displayedTier][1]}</p>
        <ul id="pricing-feature-list">
          <li id="pricing-list-item-1" className="pricing-list-item">This is a fantastic feature</li>
          <li id="pricing-list-item-2" className="pricing-list-item">This could also be a compelling offer</li>
          <li id="pricing-list-item-3" className="pricing-list-item">What an amazing set of features!</li>
          <p className="faint-text">Features will include those from the lower tiers with no additional price.</p>
        </ul>
      </div>
      <div id="grid-image-right">
        <div id="tier-grid">
          <button id="iron-button" onClick={() => setDisplayedTier('iron-button')} type="button">
            Iron
            <br />
            $
          </button>
          <button id="silver-button" onClick={() => setDisplayedTier('silver-button')} type="button">
            Silver
            <br />
            $$
          </button>
          <button id="gold-button" onClick={() => setDisplayedTier('gold-button')} type="button">
            Gold
            <br />
            $$$
          </button>
          <button id="platinum-button" onClick={() => setDisplayedTier('platinum-button')} type="button">
            Platinum
            <br />
            $$$$
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
