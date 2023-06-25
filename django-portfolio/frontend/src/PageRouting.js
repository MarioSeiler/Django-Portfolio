import React from 'react';

import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Subgroup from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const PageRouter = () => (
    <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/about-me' element={<AboutMe/>} />
        <Route exact path='/skills' element={<Subgroup/>} />
        <Route exact path='/projects' element={<Projects/>} />
        <Route exact path='/contact' element={<Contact/>} />
    </Routes>
);

export default PageRouter;