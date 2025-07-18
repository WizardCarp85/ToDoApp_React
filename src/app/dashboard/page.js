"use client";
import Task from "@/components/Task/Task";
import React, { useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    "learn react",
    "leetcode",
  ]);

  //create tasks

  //read tasks from firebase

  //update tasks in firebase

  //delete tasks


  return (
    <div className="dashboard flex flex-col items-center w-full md:gap-6 md:mx-[2em] h-screen">
      {/* heading */}
      <div className="title flex items-center justify-center md:mt-20">
        <h1 className="text-[#1e90ff] md:text-4xl font-semibold tracking-wide drop-shadow-[1px_1px_1px_#3b82f6]">
          PlannerHub
        </h1>
      </div>
      {/* creating task */}
      <div className="create md:my-8">
        <h1 className="md:text-2xl font-semibold mb-2 text-gray-300">
          Create Task
        </h1>
        <form className="create-form flex flex-row md:gap-1 md:w-[32em] border-2 rounded-md border-gray-500">
          <input
            type="text"
            placeholder="Add a new task . . . ."
            className="task-input md:px-4 h-[3.2rem] w-full"
          />
          <button
            type="submit"
            className="create-button text-blue-500 hover:text-blue-400 md:h-[3.2rem] md:w-[3.2rem] flex items-center justify-center"
          >
            <i className="fa-solid fa-square-plus text-5xl md:p-1"></i>
          </button>
        </form>
      </div>
      {/* modifying task list */}
      <div className="task-list md:w-[32em]">
        <h1 className="md:text-2xl font-semibold text-gray-300 w-full md:mb-3">
          My Tasks
        </h1>
        <div className="w-full border-2 border-gray-500 rounded-lg">
          <ul className="w-full">
            {tasks.map((task, index) => (
              <Task key={index} task={task} />
            ))}
          </ul>
          <h4 className="text-center md:text-sm text-blue-400 md:p-3">
            You have {tasks.length} Tasks
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
