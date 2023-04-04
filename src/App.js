import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./index.css";

const App = () => {
	let [expenses, setExpenses] = useState([
		{ id: 'e1', location: 'Delhi', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), },
		{ id: 'e2', location: 'Chandigarh', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
		{ id: 'e3', location: 'Noida', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), },
		{ id: 'e4', location: 'Gao', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), },
	]);

	const addExpenseHandler = (newExpense) => {
		setExpenses((prevExp) => {
			console.log("prevExp: ");
			console.log(prevExp);
			return [...prevExp, newExpense];
		});
	}

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;