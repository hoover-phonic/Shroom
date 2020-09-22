import  { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Add Expense
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 
  } = {} 
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ( { id } = {} ) =>({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text ='') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByAmount = ()=> ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
})

const sortByDate = ()=> ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
})

const setStartDate = (startDate) =>({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE' :
      return [
        ...state, 
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id })=>id !== action.id );
    case 'EDIT_EXPENSE': 
      return state.map((expense)=> {
        if(expense.id === action.id ){
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return state;
        }
      });
    default: 
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state= filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return{
        ...state,
        sortBy: action.sortBy
      };
    case 'SORT_BY_DATE':
      return{
        ...state,
        sortBy: action.sortBy
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt>= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt<=endDate;
    const textMatch =true;

    return startDateMatch && endDateMatch && textMatch;
  });
}


const store =createStore( 
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(()=>{
  const state = store.getState(); 
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses );
});




const expenseOne = store.dispatch(addExpense({ description:'Rent', amount: 200, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description:'Shopping', amount: 400, createdAt:-1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense( expenseTwo.expense.id, {amount: 320}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [{
    id: 'fehsag',
    description: 'January Rent',
    notes: 'This was the final payment of that address',
    amount: 5325,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};


// const user = {
//   name : 'Jan',
//   age: 34
// }


// const information ={ 
//   location: 'India',
//   date: "2nd April"
//  }
// console.log({
//   ...user,
//   ...information
// });