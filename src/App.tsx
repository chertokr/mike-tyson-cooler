import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import useSound from 'use-sound';

// Define MyButton component outside of the App component
const MyButton: React.FC<MyButtonProps> = ({ label }) => {
  const [playSound] = useSound('miketyson.mp3');
  return (
    <button className="red-button" onClick={playSound}>
      {label}
    </button>
  );
};

type MyButtonProps = {
  label: string;
};

function App() {
  return (
    <div>
      <h1>Mike Tyson Cooler</h1>
      <MyButton label="cooooler" />
    </div>
  );
}

export default App;