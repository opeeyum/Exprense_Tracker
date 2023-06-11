import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = props => {
  if (props.data.length) {
    return (
      <ul className="expenses-list">
        {
          props.data.map(expense =>
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />)
        }
      </ul>
    )
  }
  return <h2 className="expenses-list__fallback">Found no Expenses...</h2>;
}

export default ExpenseList;