import './main.css';
import './Navbar';
// eslint-disable-next-line import/no-unresolved
import { SpeedInsights } from '@vercel/speed-insights/next';

function App() {
  return (
    <div className="App">
      <SpeedInsights />
    </div>
  );
}

export default App;
