import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://frozen-ape.herokuapp.com/oauth2/authorize?client_id=32ace616-64b6-4317-9226-7037893f1bda&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth-redirect"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
