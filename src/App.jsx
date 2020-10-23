import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.scss';
import ContactMe from './components/ContactMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Miscellaneous from './components/Miscellaneous';
import Skills from './components/Skills';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Link className='navbar-brand' to='/'>Douglas Michael Williams</Link>
        <Navbar.Toggle aria-controls='main-site-collapse' />
        <Navbar.Collapse id='main-site-collapse'>
          <Nav>
            <Link className='nav-link' to='/experience'>Experience</Link>
            <Link className='nav-link' to='/education'>Education</Link>
            <Link className='nav-link' to='/skills'>Skills</Link>
            <Link className='nav-link' to='/miscellaneous'>Miscellaneous</Link>
            <Link className='nav-link' to='/contact'>Contact Me</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route path='/experience'>
        <Experience />
      </Route>

      <Route path='/education'>
        <Education />
      </Route>

      <Route path='/skills'>
        <Skills />
      </Route>

      <Route path='/miscellaneous'>
        <Miscellaneous />
      </Route>

      <Route path='/contact'>
        <ContactMe />
      </Route>

      <Route exact path='/'>
        Welcome to my extremely shitty site that's in progress!
      </Route>
    </BrowserRouter>
  );
}

export default App;
