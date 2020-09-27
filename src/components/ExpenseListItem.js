import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, description, id, amount, createdAt }) => (
  <div>
    <Link to= {`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount/100).format('0,0.00')} 
      -
      
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);



export default ExpenseListItem;
