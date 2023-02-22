
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", "success");
      document.title = "ReactApp - Dark Mode";

      // setInterval (() => {

      //   document.title = "React-app is Amazing Mode";
      // }, 2000);

      // setInterval (() => {

      //   document.title = "Install React-app Now";
      // }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#ced4da';
      showAlert("Light mode has been enabled", "warning");
      document.title = "ReactApp - Light Mode";
    }
  }
  return (
    <>
      
      {/* <Navbar/>
      <Navbar title="ReactApp" /> */}
      
      <Alert alert={alert} />
      <BrowserRouter>
      <Navbar title="ReactApp" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



