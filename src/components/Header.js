import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header className="header">
    <div className="content-container">
      <NavLink className="header__title" to ="/"  exact={true}>
        <h1>Shroom</h1>
      </NavLink>
    </div>
    </header>
  </div>
);

// const Header = () => (
//   <header>
//     <h1>Shroom</h1>
//     <NavLink to ="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
//     <NavLink to ="/create" activeClassName="is-active">Create Expense</NavLink>
//     <NavLink to ="/help" activeClassName="is-active">Help</NavLink>
//     </header>
// );




export default Header;
