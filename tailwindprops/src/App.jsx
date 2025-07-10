import React from 'react';
import './app.css'; // Assuming you have an app.css file for styles
import Card from './components/Card';

function App() {
  return (
    <>
    <h1 className='bg-green-400 text-black p-4'>Hello from App</h1>
    <Card username = "ujjwal"/>
    <Card username = "aditya"/>
    </>

  );
}

export default App;
