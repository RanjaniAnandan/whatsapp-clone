import React, {useState, useEffect} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chats from './Chats';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStateValue } from './stateProvider';
function App() {
  const [{user}, dispatch] = useStateValue();


  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
     <div className="app__body">
      <Router>
        <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId"
              element={
              <Chats />
              }>
            </Route>
            <Route path="/"
             element={
             <Chats />
             }>
            </Route>
          </Routes>
      </Router>
     </div>
      )}
    </div>
  );
}

export default App;
