import Hero from './Hero';
import InfoBar from './InfoBar';
import Features from './Features';
import Pricing from './Pricing';

function ContentContainer() {
  return (
    <div id="content-container">
      <Hero />
      <InfoBar />
      <Features />
      <Pricing />
    </div>
  );
}

export default ContentContainer;
