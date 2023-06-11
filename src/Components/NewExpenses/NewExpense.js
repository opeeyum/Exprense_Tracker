import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
    cancleHandler();
  };
  const [isForm, setIsForm] = useState(false);

  const addHandler = () => {
    setIsForm(true)
  }

  const cancleHandler = () => {
    setIsForm(false);
  }
  return (
    <div className="new-expense">
      {!isForm && <button type="button" onClick={addHandler}>Add New Expense</button>}
      {isForm && <ExpenseForm onSaveExpenseForm={saveExpenseHandler} cancleHandler={cancleHandler} />}
    </div>
  );
}

export default NewExpense;