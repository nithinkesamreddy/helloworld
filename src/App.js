import Navbar from './components/Navbar';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
