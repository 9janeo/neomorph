import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="container">
    <header id="masthead" className="site-header" role="banner">
      <nav id="nav-menu" className="navbar navbar-expand navbar-light">        
        <Link to={NeomorphSettings.path} ><h1 className="site-title">Neomorph Stuff</h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active link" to={NeomorphSettings.path} >Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" to={NeomorphSettings.path + "about"} >About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" to={NeomorphSettings.path + "projects"} >Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link" to={NeomorphSettings.path + "contact"} >Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header;