import React, { useState } from "react";

const CreateExpenseForm = ({ onCreateExpense }) => {
  const [editTable, setEditTable] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAmnout, setNewAmount] = useState(0);
  const [newDate, setNewDate] = useState("");

  const handleCreateExpense = (e) => {
    e.preventDefault();
    if (!newName || !newAmnout || !newDate) {
      alert("Please fill all input");
      return;
    } else {
      onCreateExpense(newName, newAmnout, newDate);
      setNewName("");
      setNewAmount(0);
      setNewDate("");
      setEditTable(false);
    }
  };

  return (
    <div className="create-expense-form">
      {editTable ? (
        <form
          className="open-expense-form"
          onSubmit={(e) => handleCreateExpense(e)}
        >
          <div>
            <label>Name</label>
            <input type="text" onChange={(e) => setNewName(e.target.value)} />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              onChange={(e) => setNewAmount(e.target.value)}
            />
          </div>
          <div>
            <label>Date</label>
            <input type="date" onChange={(e) => setNewDate(e.target.value)} />
          </div>
          <div>
            <button type="submit">Add</button>
            <button type="button" onClick={() => setEditTable(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button onClick={() => setEditTable(true)}>Add new expense</button>
      )}
    </div>
  );
};

export default CreateExpenseForm;
