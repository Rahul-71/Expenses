import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css";

function ExpenseItems(props) {
    const clickHandler = () => {
        console.log("clicked !!");
    }

    const deleteExpense = (event) => {
        const row = event.target.parentNode;
        row.remove();
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteExpense}>Delete Expense</button>
        </Card >
    );
}

export default ExpenseItems;