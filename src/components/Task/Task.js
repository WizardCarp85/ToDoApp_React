import React from "react";

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li
      className={`border-b-2 border-gray-500 rounded-sm md:p-4 p-2 ${
        task.completed ? "text-gray-500 bg-black/90" : ""
      }`}
    >
      <div className="flex items-center w-full">
        <input
          onChange={() => toggleComplete(task)}
          type="checkbox"
          className="md:mr-3 mr-2 focus:outline-none focus:ring-0"
          defaultChecked={task.completed}
        />
        <p
          onClick={() => toggleComplete(task)}
          className={`w-full text-sm ${task.completed ? "line-through" : ""}`}
        >
          {task.text}
        </p>
        <button onClick={() => deleteTask(task.id)}>
          <i className="fa-solid fa-trash-can text-sm md:text-lg text-red-400 cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
