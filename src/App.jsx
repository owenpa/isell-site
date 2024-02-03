// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import ContentContainer from './ContentContainer';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hamburger />
      <ContentContainer />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
