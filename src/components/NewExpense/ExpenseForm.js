import "./ExpenseForm.css";

export default function ExpenseForm() {

    const titleInputHandler = (event) => {
        console.log(`Title input: ${event.target.value}`);
    }
    const amountInputHandler = (event) => {
        console.log(`Amount input: ${event.target.value}`);
    }
    const dateInputHandler = (event) => {
        console.log(`Date input: ${event.target.value}`);
    }


    return (
        <form>
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
