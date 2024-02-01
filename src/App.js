import logo from './logo.svg';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div className="App">
      <SpeedInsights />
    </div>
  );
}

export default App;
