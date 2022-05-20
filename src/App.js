import React from 'react';
import "./styles/App.scss";
import Editor from "./components/Editor";
import NavBar from './components/nav-bar';
import SignupButton from './components/signup-button';
function App() {
  return (
    <div className="App">

      <NavBar />
      <Editor />
    </div>
  );
}

export default App;
