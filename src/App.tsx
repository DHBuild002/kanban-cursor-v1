import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;