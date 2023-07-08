import React from 'react';

import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home'
import Subgroup from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const PageRouter = () => (
    <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Subgroup/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
);


export default PageRouter;

function PageNotFound() {
  	return (
    	<div className='mt-64 p-8 justify-center w-full h-full text-5xl font-bold'>
      		<div className='mx-auto max-w-md'>404 Page not found</div>
    	</div>
  	);
}