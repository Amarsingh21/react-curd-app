import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Task from './components/Task';
import { useState } from 'react';
function App() {
  return (

    <div className="App">
      <Header />
      <div className='card' >
        <Task />
      </div>
      <Footer />
    </div>
  );
}

export default App;
