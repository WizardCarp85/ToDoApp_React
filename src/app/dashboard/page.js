"use client";
import Task from "@/components/Task/Task";
import React, { useEffect, useState } from "react";
import { db } from "@/app/firebase/config";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  where,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const router = useRouter();
  const [search,setSearch] = useState("");

  // checking for user signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/auth/sign-in");
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  //create tasks
  const createTask = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid task");
      return;
    }
    await addDoc(collection(db, "tasks"), {
      text: input,
      completed: false,
      userId: auth.currentUser.uid,
    });
    setInput("");
  };

  //read tasks from firebase
  useEffect(() => {
    if (!auth.currentUser) return;
    const q = query(
      collection(db, "tasks"),
      where("userId", "==", auth.currentUser.uid)
    );
    const snap = onSnapshot(q, (querySnapshot) => {
      let tasksArr = [];
      querySnapshot.forEach((elem) => {
        tasksArr.push({ ...elem.data(), id: elem.id });
      });
      console.log("Tasks:", tasksArr);
      setTasks(tasksArr);
    });
    return () => snap();
  }, [auth.currentUser]);

  //update tasks in firebase
  const toggleComplete = async (task) => {
    await updateDoc(doc(db, "tasks", task.id), {
      completed: !task.completed,
    });
  };

  //delete tasks
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  // search tasks
  const filterSearch = tasks.filter(task => 
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex justify-center mt-[18em] md:mt-[20em] h-screen">
        <p className="text-2xl md:text-5xl font-semibold">
          Loading . . . . . .
        </p>
      </div>
    );

  return (
    <div className="dashboard flex flex-col md:flex-row items-center md:gap-6 md:mx-[2em] h-screen md:min-h-screen md:overflow-auto mb-24 md:mb-0">
      {/* heading */}
      <div className="title flex flex-col items-center mt-10 md:mt-0 pr-12">
        <h1 className="text-[#1e90ff] md:text-4xl mb-4 text-2xl font-semibold tracking-wide drop-shadow-[1px_1px_1px_#3b82f6] md:mb-[6em] w-full">
          PlannerHub
        </h1>
        <h4 className="hidden md:flex text-center md:text-xl text-xs p-2 text-blue-400 tracking-wide font-semibold border-4 rounded-2xl md:p-6 border-gray-600 shadow-md shadow-gray-500/20">
          {tasks.length
            ? <span>Total No. of Tasks: <br/><span className="text-violet-600 ">{tasks.length}</span></span>
            : "Drop your first task 📋"}
        </h4>
      </div>
      <div className="md:border-r-4 md:border-gray-500 h-[150%]"></div>
      <div className="w-full flex flex-col md:h-full md:mt-[6em]">
        {/* creating task */}
        <div className="create my-6 md:my-8 w-[70%] md:w-[80%] mx-auto md:mx-4">
          <h1 className="md:text-2xl text-xl font-semibold mb-2 text-gray-300">
            Create Task
          </h1>
          <form
            onSubmit={createTask}
            className="create-form flex flex-row md:gap-1 border-2 rounded-md border-gray-500"
          >
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
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
        <div className="task-list w-[70%] md:w-[80%] mx-auto md:mx-4">
          <h1 className="md:text-2xl text-xl font-semibold text-gray-300 w-full mb-2 md:mb-3">
            My Tasks
          </h1>
          {/* search bar */}
          {tasks.length > 0 && (
            <div className="search flex items-center mb-2 w-full p-2 border-2 border-gray-500 rounded-md text-xs md:text-base md:py-3 md:px-4">
              <i className="fa-solid fa-magnifying-glass mr-2"></i>
              <input
              type="text"
              placeholder="Search tasks..."
              onChange={(e)=>setSearch(e.target.value)}
              className="w-full focus:outline-none focus:ring-0"
              />
            </div>
          )}
          {/* Sorting and Pagination */}

          {/* task list */}
          <div className="w-full border-2 border-gray-500 rounded-lg">
            <ul className="w-full tracking-wider">
              {filterSearch.map((task, index) => (
                <Task
                  key={index}
                  task={task}
                  toggleComplete={toggleComplete}
                  deleteTask={deleteTask}
                />
              ))}
            </ul>
            <h4 className="md:hidden flex flex-col text-center md:text-xl text-xs p-2 text-blue-400 tracking-wide font-semibold md:border-4 md:rounded-2xl md:p-6 border-gray-600 shadow-md shadow-gray-500/20">
              {tasks.length
                ? <span>Total No. of Tasks: <span className="text-violet-600">{tasks.length}</span></span>
                : "Drop your first task 📋"}
            </h4>
            {tasks.length === 0 && (
              <p className="text-center text-gray-400 p-4 hidden md:flex">
                No tasks available. Please create a task.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
