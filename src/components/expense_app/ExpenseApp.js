import React, { useState } from "react";
import expenseData from "../../data/expenseData.js";
import CreateExpenseApp from "../expense_app/CreateExpenseForm.js";
import ExpenseChart from "../expense_app/ExpenseChart.js";
import ExpenseItem from "./ExpenseItem.js";

const ExpenseApp = () => {
  const [data, setData] = useState(expenseData);
  const [filterYear, setFilterYear] = useState("All");

  const createExpense = (name, amount, date) => {
    const newExpense = {
      id: Date.now(),
      name,
      amount: Number(amount),
      date,
    };

    setData([...data, newExpense]);
  };

  const result = data.filter((item) => {
    const year = item.date.split("-")[0];
    return filterYear == year;
  });

  const filteredYear = filterYear == "All" ? data : result;

  return (
    <div>
      <CreateExpenseApp onCreateExpense={createExpense}></CreateExpenseApp>
      <div>
        <div>
          <span>Filter by years</span>
          <select
            value={filterYear}
            onChange={(e) => {
              setFilterYear(e.target.value);
            }}
          >
            <option value={"All"}>All</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>
        </div>
      </div>

      <ExpenseChart data={filteredYear}></ExpenseChart>

      <div className="expense-list">
        {filteredYear.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              date={item.date}
            ></ExpenseItem>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseApp;
