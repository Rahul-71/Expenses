import { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('all');

  const filterChangeHandler = (selectedFilteredYear) => {
    setFilteredYear(selectedFilteredYear);
  }

  // filtering expenses based on selected year
  const filteredExpenses = (filteredYear === "all") ? props.expenses : props.expenses.filter(
    exp => exp.date.getFullYear() == filteredYear
  )

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </div>

  );
}