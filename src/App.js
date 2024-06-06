import './App.css';
import Login from './Login/Login';
import Table from './Tbale/Table';
import Sidebar from './Sidebar/Sidebar';
import Navigate from './Nvigationbar/Navigate';
import Output from './Show-Output/Output';
import ContextAp from './Context/ContextAp';
import { createContext } from 'react';
import ApiTwo from './Context/ApiTwo';
import ApiThree from './Context/ApiThree';
import Footer from './Router/footer';
import Header from './Router/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Router/Nav';
import { Link } from 'react-router-dom';




function App() {

  return (
    <div  >


      <Navigate />
      <Sidebar />





    </div >
  );
}

export default App;
