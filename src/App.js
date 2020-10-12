import React from 'react';
import Header from './components/header/header.component'
import Sidebar from './components/sidebar/sidebar.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="o-main">
        <Sidebar/>
      </main>
    </div>
  );
}

export default App;
