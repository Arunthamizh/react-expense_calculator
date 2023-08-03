import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter";
import React, {useState} from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {

    const [filterYear, setFilterYear] = useState('2020')

    const filterChnageHandler = (seletedYear) => {
        setFilterYear(seletedYear)
    }

    const filtedExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear
    })

    // let expensesContent = <p> No expenses found</p>

    // if(filtedExpenses.length > 0){
    //     expensesContent = filtedExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     ))
    // }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChnageHandler} />

            <ExpensesChart expenses={filtedExpenses}/>

            {/* First Method */}

            {/* { filtedExpenses.length === 0 && <p> No expenses found</p> }
            { filtedExpenses.length > 0 && filtedExpenses.map((expense) => (
                // console.log('item1', expense);
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )) } */}

            {/* Second method */}
            {/* {expensesContent} */}

            {/* third Method */}
            <ExpensesList items={filtedExpenses}/>



            {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount}  date={props.items[0].date } /> */}
            {/* <ExpenseItem title={props.item[1].title} amount={props.item[0].amount}  date={props.item[0].date } /> */}

        </Card>
    )
}

export default Expenses;