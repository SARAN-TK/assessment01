import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {  Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Nav/>
      
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route  path='/form' element={<Form/>}></Route>
         
        </Routes>
      
    </div>
  );
}

export default App;
