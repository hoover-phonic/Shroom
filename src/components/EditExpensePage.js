import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
  return(
    <div>
      <div className="subtitle">
        <div className="content-container">
          <h1 className="subtitle__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm 
          expense = {props.expense}
          onSubmit = {(expense) =>{
            props.dispatch(editExpense(props.expense.id,
              expense));
            props.history.push('/');
            console.log('updated', expense);
          }}
        />
        <button 
        className="button button--secondary"
        onClick={() => {
          props.dispatch(removeExpense({ id : props.expense.id }));
          props.history.push('/');
        }}>Remove Expense</button>
      </div>
      <div className="content-container">
        
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);

