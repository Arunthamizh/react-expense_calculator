import React, {useState} from 'react'; // Morden react no need to import React
import './App.css';
// import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 297.35, date: new Date(2021, 2, 28) },
  { id: 'e2', title: 'House Rent', amount: 297.35, date: new Date(2021, 2, 28) },
  { id: 'e3', title: 'New TV', amount: 297.35, date: new Date(2020, 2, 28) },
  { id: 'e4', title: 'Food', amount: 297.35, date: new Date(2021, 2, 28) }
]
const App = () => {



  const [expenses, setNewExpenses] = useState(DUMMY_EXPENSES)
 
  // Alternative way of JSX to write code below but compare to JSX it is not more readable
  // (elementname, attributes, content used in the element)
  
  // return React.createElement('div', {},
  //   React.createElement('h2', {}, 'Let`s get started!'),
  //   React.createElement(Expenses, { item: expenses }))

  const addExpenseHandler = expense => {
    console.log('In App.js');
    // console.log(expense)
    // expenses.push(expense)
    // console.log(expenses)
    // expenses.push(expense)
    setNewExpenses([expense, ...expenses])
    // console.log('expenses',expenses)
  }

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
    </div> 
  );
}

export default App;
