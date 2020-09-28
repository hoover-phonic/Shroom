import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import {Link} from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>
    <div className="sub-header">
      <div className= "content-container">
       <button className="button"><Link className="sub-header__title" to ="/create">Add Expense</Link></button>
      </div>
    </div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;