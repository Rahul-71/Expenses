import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedFilteredYear) => {
        setFilteredYear(selectedFilteredYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.expenses.map(expense => (
                <ExpenseItems
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    location={expense.location}
                />
            ))}
        </Card>
    );
}