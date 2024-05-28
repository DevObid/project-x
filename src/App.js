import './App.css';
import Login from './Login/Login';
import Table from './Tbale/Table';
import Sidebar from './Sidebar/Sidebar';
import Navigate from './Nvigationbar/Navigate';
import Output from './Show-Output/Output';
import ContextAp from './Context/ContextAp';
import { createContext } from 'react';

export const Context = createContext()

function App() {

  return (
    <div>
      <Output />
      <Navigate />
      <Sidebar />

      {/* <Context.Provider value={"ans"}>
        <ContextAp />

      </Context.Provider> */}

    </div>
  );
}

export default App;
