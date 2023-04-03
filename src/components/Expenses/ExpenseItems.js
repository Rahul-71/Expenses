import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css";

function ExpenseItems(props) {
    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () => {
        setAmount(100);
        console.log(amount);
    }

    const deleteExpense = (event) => {
        const row = event.target.parentNode;
        row.remove();
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={amount} location={props.location} />
            <button onClick={clickHandler}>Change Price</button>
            <button onClick={deleteExpense}>Delete Expense</button>
        </Card >
    );
}

export default ExpenseItems;