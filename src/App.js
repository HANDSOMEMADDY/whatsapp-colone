import './App.css'; 
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
import { useState } from 'react';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';

function App() {
     const [{user},dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <h1><Login/></h1>
      ) : (
     <div className='app-body'>
       <Router>
       <Sidebar/>
         <Switch>
           <Route  path='/rooms/:roomId'>
           <Chat/>
           </Route>
           <Route  path='/'>
           <Chat/>
           </Route>
         </Switch>
       </Router>
     </div>
     )}
    </div>
  );
}
export default App;
