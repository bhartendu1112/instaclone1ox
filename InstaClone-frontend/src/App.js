import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"
import Home from "./Components/Home/home"
import Posts from "./Components/Posts/posts"
import Form from './Components/Form/form';


const App=() => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/posts' element={<Posts></Posts>}></Route>
        <Route exact path='/form' element={<Form></Form>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
