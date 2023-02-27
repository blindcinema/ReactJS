
import './App.css';
import {Logo} from './components/Logo';
import { CoinFlip } from './components/CoinFlip';
import {Navigation} from './components/Navigation';



function App() {
  const today = new Date();

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1 className="main-title">Hello World!</h1>
        <p>{today.toLocaleString()}</p>
        <CoinFlip />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Navigation />
      </header>
    </div>
  );
};

export default App;
