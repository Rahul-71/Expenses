import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");


    const titleInputHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountInputHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateInputHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log("from expenseForm");
        console.log(expenseData);

        // calling parent function from child component
        props.onSaveExpenseData(expenseData);

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }

    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls" >
                <div className="new-expense__controls" >
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleInputHandler} />
                </div>
                <div className="new-expense__controls" >
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="50" step="1" onChange={amountInputHandler} />
                </div>
                <div className="new-expense__controls" >
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateInputHandler} />
                </div>
                <div className="new-expense__actions" >
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}
