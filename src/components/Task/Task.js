import React from 'react'

const Task = ({task}) => {
  return (
    <li className='border-b-2 border-gray-500 rounded-sm md:p-4'>
      <div className='flex items-center w-full'>
        <input type="checkbox" className='md:mr-3' />
        <p className='w-full'>{task}</p>
        <button><i className="fa-solid fa-trash-can text-lg text-red-400 cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out"></i></button>
      </div>
    </li>
  )
}

export default Task