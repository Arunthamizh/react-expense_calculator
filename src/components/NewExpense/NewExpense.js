import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import React, {useState} from 'react'
const NewExpense = (props) =>{

    const [isEditing, setEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        console.log('child to parent', expenseData)
        // pass data to the from child to parent
        props.onAddExpense(expenseData)
    }

    const startEditingHandler = () => {
        setEditing(true)
    }

    const stopEditingHandler = () => {
        setEditing(false)
    }

    return (
        <div className='new-expense'>
        {/* received date from child to parent */}
        {!isEditing && ( <button onClick={startEditingHandler} >Add new Expense</button>)}
        {isEditing && (<ExpenseForm onSaveExpenseDate ={saveExpenseDataHandler} onCancel={stopEditingHandler} />) }
        
        </div>
    )
}

export default NewExpense;