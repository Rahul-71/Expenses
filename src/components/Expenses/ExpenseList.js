import ExpenseItems from "./ExpenseItems";
import "./ExpenseList.css";

export default function ExpenseList(props) {
    let expenseContent = <h3 className="expenses-list__fallback">Found No Expenses !!</h3>

    if (props.expenses.length > 0) {

        expenseContent = props.expenses.map(expense => {
            return (
                <ExpenseItems
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            );
        });

        // displaying message when single expense is present
        if (props.expenses.length === 1) {
            expenseContent = (
                <div>
                    {expenseContent}
                    <p className="expenses-list__fallback">Only single Expense here. Please add more...</p>
                </div>
            );
        }
    }

    return (
        <ul className="expenses-list">
            {expenseContent}
        </ul>
    );
}