import React from 'react';
import './App.css';
import ScrollableTabsButtonAuto from './Components/TabPanel';

interface AppProps {
  //from TabPanel

}

function App(props: AppProps) {
  return (
    <div>
      <header className="App-header">
        <h1>Escape the Relief Society Room</h1>

      </header>

      <nav>
        <ScrollableTabsButtonAuto
        />
      </nav>
    </div>
  );
}

export default App;
