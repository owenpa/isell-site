import Hero from './Hero';
import InfoBar from './InfoBar';
import Features from './Features';
import Pricing from './Pricing';
import About from './About';
import Developer from './Developer';

function ContentContainer() {
  return (
    <div id="content-container">
      <Hero />
      <InfoBar />
      <Features />
      <Pricing />
      <About />
      <Developer />
    </div>
  );
}

export default ContentContainer;
