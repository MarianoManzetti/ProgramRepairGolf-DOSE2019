import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import f  from './Authorization';

const Navbar = (props) => {
  return f.isAuthenticated ? (
    <nav className="nav-wrappen red">
    <div className="container" align="left">
      <Link className="brand-logo" to="/">Program Repair Game</Link>
      <ul className="right">

        <li><NavLink to='/propositions'>Propositions</NavLink></li>
        <li><NavLink to='/userstats'>Statistics</NavLink></li>
        <li><NavLink to='/challenge'>Challenge</NavLink></li>
        <li><NavLink to='/comments'> Comments </NavLink></li>
        <li><NavLink style={{background:'white',color:'red'}} onClick={ () => f.signout() } to={{pathname:'/'}}
              activeStyle={{background:'#f63c3c',color:'#f63c3c'}}
              isActive={(match, location) => {if (!match) {
                return false;}
              return match.isExact;
            }}>Cerrar Sesion</NavLink></li>
      </ul>
    </div>
  </nav>
): (
  <nav className="nav-wrappen red">
  <div className="container" align="left">
    <Link className="brand-logo" to="/">Program Repair Game</Link>
    <ul className="right">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to='/about'>About Us</NavLink></li>
    </ul>
  </div>
</nav>
)
};

export default withRouter(Navbar)
