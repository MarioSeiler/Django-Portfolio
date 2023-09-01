import React from 'react';
import Nav from './components/Nav'
import PageRouter from './PageRouting'
import {
  BrowserRouter as Router
} from "react-router-dom";
// Translation Higher Order Component

const App = () => {
  return ( 
      <div class="">
          <Router>
        <Nav />
            <PageRouter />
          </Router>
      </div>
    )
};

export default App;
