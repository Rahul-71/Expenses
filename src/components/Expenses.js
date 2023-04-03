import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";

export default function Expenses(props) {
    return (
        <div className="expenses">
            {props.expenses.map(expense => (
                <ExpenseItems
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    location={expense.location}
                />
            ))}
        </div>
    );
}