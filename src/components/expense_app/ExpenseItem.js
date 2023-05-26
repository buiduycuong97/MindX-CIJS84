import React from "react";
import "../../css/expenseItem.css";

const ExpenseItem = ({ name, amount, date }) => {
  return (
    <div className="expense-item">
      <div className="expense-date">{date}</div>
      <div className="expense-name">{name}</div>
      <div className="expense-amount">${amount}</div>
    </div>
  );
};

export default ExpenseItem;
