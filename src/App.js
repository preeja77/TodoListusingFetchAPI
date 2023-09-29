import React from "react"
import './App.css';
import Home from "./routes/Home"
import TodosList from "./routes/TodosList"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/TodosList" element = {<TodosList/>}/>
      </Routes>
      </>
    </div>
  );
}

export default App;
