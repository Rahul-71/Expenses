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
	}

	// filtering expenses based on selected year
	const filteredExpenses = (filteredYear === "all") ? props.expenses : props.expenses.filter(
		exp => exp.date.getFullYear() == filteredYear
	)

	let expenseContent = <p> No Content Found !!</p>

	if (filteredExpenses.length > 0) {
		console.log("triggered: len=" + filteredExpenses.length);
		expenseContent = filteredExpenses.map(expense => (
			<ExpenseItems
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date} />
		));
	}


	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
				{expenseContent}
			</Card>
		</div>

	);
}