import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    // Use state to keep track of whether the user is editing or not
    const [isEditing, setIsEditing] = useState(false);

    // Function to handle saving the entered expense data
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // Create an object with the entered expense data and a unique ID
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        // Pass the new expense data up to the parent component via the onAddExpense prop
        props.onAddExpense(expenseData);

        // Stop editing and go back to displaying the Add New Expense button
        stopEditing();
    };

    // Function to set isEditing to true when the Add New Expense button is clicked
    const startEditing = () => {
        setIsEditing(true);
    };

    // Function to set isEditing to false when the Cancel button is clicked
    const stopEditing = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {/* Only show the Add New Expense button if the user is not already editing */}
            {!isEditing && (
                <button onClick={startEditing}>Add New Expense</button>
            )}

            {/* Only show the ExpenseForm component if the user is currently editing */}
            {isEditing && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing} />
            )}
        </div>
    );
};

export default NewExpense;
