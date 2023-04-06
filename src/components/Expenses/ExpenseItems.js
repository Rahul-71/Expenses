import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css";

function ExpenseItems(props) {
    const deleteExpense = (event) => {
        const row = event.target.parentNode;
        row.remove();
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <ExpenseDetails title={props.title} amount={props.amount} />
                <button onClick={deleteExpense}>Delete Expense</button>
            </Card >
        </li>
    );
}

export default ExpenseItems;