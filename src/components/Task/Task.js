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
        <p className={`w-full text-sm ${task.completed ? "line-through" : ""}`}>
          {task.text}
        </p>
        <div className="flex flex-row md:w-[15vw]">
          <p className="hidden md:flex text-[0.7rem] text-center text-gray-300 font-semibold">
            {new Date(task.createdAt).toLocaleString("en-IN", {
              dateStyle: "short",
              timeStyle: "short",
            })}
          </p>
          <button onClick={() => deleteTask(task.id)}>
            <i className="fa-solid fa-trash-can text-sm md:text-lg md:ml-8 text-red-400 cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;
