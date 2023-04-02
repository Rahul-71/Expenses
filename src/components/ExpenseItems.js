import "./ExpenseItems.css"

function ExpenseItems(props) {
    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expenseAmount = props.amount;
    const expenseLocation = props.location;

    return (
        <div className="expense-item">
            <div>{expenseDate.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
                <div className="expense-item__price">{expenseLocation}</div>
            </div>
        </div >
    );
}

export default ExpenseItems;