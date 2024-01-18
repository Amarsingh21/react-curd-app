import React, { useState } from 'react';

const TaskList = ({ tasks, onDelete, onComplete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed-task' : 'taskItem'}>
          <span>{task.text}</span>
          {/* <div className='text-btn' > */}
          <span className='text-btn'>
            <button onClick={() => onComplete(index)} >&#10004;</button>
            <button onClick={() => onDelete(index)}>X</button>
          </span>
          {/* </div> */}
        </li>
      ))}
    </ul>
  );
};

const TaskApp = () => {
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  const filteredTasks = tasks.filter(
    (task) =>
      task.text.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!task.completed || searchTerm === '')
  );

  // const [foodItems, setFoodItems] = useState([]);

  // const onKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     let newFoodItem = event.target.value;
  //     event.target.value = "";
  //     let newItems = [...foodItems, newFoodItem];
  //     setFoodItems(newItems);
  //   }
  // };
  return (
    <div >
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <span>Pending Tasks: {pendingTasks.length}, </span>
        <span>Completed Tasks: {completedTasks.length}</span>
      </div>
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onComplete={completeTask} />
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask} className='addTaskBtn'>Add Task</button>
    </div >
  );
};

export default TaskApp;
