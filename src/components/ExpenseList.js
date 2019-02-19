import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//regular unconnected component
//export to use in snapshot testing
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense}/>
        })
      )
    }
  </div>
);

//function
const mapStateToProps = (state)=>{
  return {
    //return the filterd expenses through selectExpenses
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

//HOC
//pull everything together
//define the things we want to get off the store
//and the component we want to create 
//the connected version of
export default connect(mapStateToProps)(ExpenseList);

