import React from 'react';
import ImageToBase64 from './components/imageToBase64/Index'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>1. 图片处理</h1>
        <ImageToBase64 />
      </div>
      
    </div>
  );
}

export default App;
