import './App.css';

import packageJSON from '../package.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My First App</p>
        <span style={{ fontSize: 12 }}>Version {packageJSON.version}</span>
      </header>
    </div>
  );
}

export default App;
