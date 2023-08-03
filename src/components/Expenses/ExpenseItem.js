import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import './ExpenseItem.css'
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('updated')
    }

    // () This is used to signal to javascript that this is one even it should span multipe lines
    return (
        // custom Element not support className so that we need to pass it and use in the component function
       <li>
       <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </div>
        </Card>
        </li>
    )
}

export default ExpenseItem;