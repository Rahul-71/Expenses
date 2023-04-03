import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css";

function ExpenseItems(props) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location} />
        </Card >
    );
}

export default ExpenseItems;