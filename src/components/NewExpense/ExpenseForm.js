import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })


    const titleInputHandler = (event) => {
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // });
        setEnteredTitle(event.target.value);
        // console.log(`Title input: ${event.target.value}`);
    }
    const amountInputHandler = (event) => {
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value }
        // });
        setEnteredAmount(event.target.value);
        // console.log(`Amount input: ${event.target.value}`);
    }
    const dateInputHandler = (event) => {
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value }
        // });
        setEnteredDate(event.target.value);
        // console.log(`Date input: ${event.target.value}`);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // const expenseData = { ...userInput, enteredDate: new Date(userInput['enteredDate']) };
        console.log(expenseData);
    }


    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls" >
                <div className="new-expense__controls" >
                    <label>Title</label>
                    <input type="text" onChange={titleInputHandler} />
                </div>
                <div className="new-expense__controls" >
                    <label>Amount</label>
                    <input type="number" min="50" step="1" onChange={amountInputHandler} />
                </div>
                <div className="new-expense__controls" >
                    <label>Date</label>
                    <input type="date" min="2019-01-01" onChange={dateInputHandler} />
                </div>
                <div className="new-expense__actions" >
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}
