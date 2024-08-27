// src/components/HabitItem.js
import React from "react";

function HabitItem({ habit, updateHabit, deleteHabit }) {
  const toggleStatus = () => {
    updateHabit(habit._id, { status: !habit.status });
  };

  return (
    <div className="habit-item">
      <h3>{habit.name}</h3>
      <p>{habit.description}</p>
      <p>Category: {habit.category}</p>
      <p>Tags: {habit.tags.join(", ")}</p>
      <button onClick={toggleStatus}>
        {habit.status ? "Completed" : "Mark as Completed"}
      </button>
      <button onClick={() => deleteHabit(habit._id)}>Delete</button>
    </div>
  );
}

export default HabitItem;
