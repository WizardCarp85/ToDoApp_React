"use client";
import Task from "@/components/Task/Task";
import React, { useEffect, useState } from "react";
import {db} from "@/app/firebase/config";
import {query,collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from "firebase/firestore";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [input,setInput] = useState("")

  //create tasks
  const createTask = async (e) => {
    e.preventDefault(e)
    if(input===""){
      alert('Please enter a valid task')
      return
    }
    await addDoc(collection(db,'tasks'),{
      text:input,
      completed:false,
    })
    setInput("")
  }

  //read tasks from firebase
  useEffect(() => {
    const q = query(collection(db,'tasks'))
    const snap = onSnapshot(q,(querySnapshot)=>{
      let tasksArr = []
      querySnapshot.forEach((elem)=>{
        tasksArr.push({...elem.data(),id:elem.id})
      })
      setTasks(tasksArr)
    })
    return () => snap()
  }, []);

  //update tasks in firebase
  const toggleComplete = async(task) => {
    await updateDoc(doc(db,'tasks',task.id),{
      completed : !task.completed
    })

  }

  //delete tasks
  const deleteTask = async(id) => {
    await deleteDoc(doc(db,'tasks',id))
  }


  return (
    <div className="dashboard flex flex-col items-center md:gap-6 md:mx-[2em] h-screen w-screen">
      {/* heading */}
      <div className="title flex items-center justify-center md:mt-20 mt-10">
        <h1 className="text-[#1e90ff] md:text-4xl mb-4 text-2xl font-semibold tracking-wide drop-shadow-[1px_1px_1px_#3b82f6]">
          PlannerHub
        </h1>
      </div>
      {/* creating task */}
      <div className="create my-6 md:my-8 w-[70%] md:w-[50%]">
        <h1 className="md:text-2xl text-xl font-semibold mb-2 text-gray-300">
          Create Task
        </h1>
        <form onSubmit={createTask} className="create-form flex flex-row md:gap-1 border-2 rounded-md border-gray-500">
          <input
            type="text"
            onChange={(e)=>setInput(e.target.value)}
            value ={input}
            placeholder="Add a new task . . . ."
            className="task-input md:px-4 md:h-[3.2rem] w-full text-xs md:text-base p-2 focus:outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="create-button text-blue-500 hover:text-blue-400 md:h-[3.2rem] md:w-[3.2rem] flex items-center justify-center"
          >
            <i className="fa-solid fa-square-plus text-2xl md:text-5xl md:p-1 p-1"></i>
          </button>
        </form>
      </div>
      {/* modifying task list */}
      <div className="task-list w-[70%] md:w-[50%]">
        <h1 className="md:text-2xl text-xl font-semibold text-gray-300 w-full mb-2 md:mb-3">
          My Tasks
        </h1>
        <div className="w-full border-2 border-gray-500 rounded-lg">
          <ul className="w-full tracking-wider">
            {tasks.map((task, index) => (
              <Task key={index} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask}/>
            ))}
          </ul>
          <h4 className="text-center md:text-sm text-xs p-2 text-blue-400 md:p-2 tracking-wide font-semibold">
            {tasks.length ? 
              `You have ${tasks.length} Tasks` : "Drop your first task 📋"
            }
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
