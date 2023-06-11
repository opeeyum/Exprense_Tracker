import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpenseChart from "./ExpensesChart.js";
import Card from "../UI/Card.js";

function Expenses(props) {
  const { data: expenses } = props;
  const [selectedYear, setSelectedYear] = useState("2021");

  const expenseFilterHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  }
  const expenseList = expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilterUpdate={expenseFilterHandler} />
      <ExpenseChart expenses={expenseList} />
      <ExpenseList data={expenseList} />
    </Card>
  );
}

export default Expenses;