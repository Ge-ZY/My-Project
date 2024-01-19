import React from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './root';
import { ThemeContext } from './utils/ThemeContext';

function App() {
  const [darkMode, setDarkMode] = React.useState(1);
  const counterAdd = () => {
    setDarkMode(darkMode + 1);
  }
  return (
    <div className="App">
      <Root></Root>
    </div>
  );
}

export default App;
