import React from 'react';

import Nav from './components/Nav'
import PageRouter from './PageRouting'
import {
  BrowserRouter as Router
} from "react-router-dom";
// Translation Higher Order Component

const App = () => {
  return ( 
      <div>
        <Nav />
        <div className='ml-36 h-full'>
          <Router>
            <PageRouter />
          </Router>
        </div>
      </div>
    )
};

export default App;
