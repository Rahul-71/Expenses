import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2023');
    const [expenses, setExpenses] = useState(props.expenses);

    const filterChangeHandler = (selectedFilteredYear) => {
        setFilteredYear(selectedFilteredYear);

        // filtering expenses based on selected year
        setExpenses(() => {
            if (selectedFilteredYear == "all")
                return props.expenses;
            return props.expenses.filter((exp) => exp.date.getFullYear() == selectedFilteredYear);
        })
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expenses.map(expense => (
                    <ExpenseItems
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>

    );
}