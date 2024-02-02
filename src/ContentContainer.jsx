import Hero from './Hero';
import InfoBar from './InfoBar';
import Features from './Features';
import Pricing from './Pricing';
import About from './About';

function ContentContainer() {
  return (
    <div id="content-container">
      <Hero />
      <InfoBar />
      <Features />
      <Pricing />
      <About />
    </div>
  );
}

export default ContentContainer;
