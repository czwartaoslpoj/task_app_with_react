import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Eat a cookie',
            day: 'Jun 27th 2:40pm',
            reminder: true,
        }, 
        {
            id:2, 
            text: 'Feed a cat',
            day: 'Jun 27th 6pm',
            reminder: true,
        }
    ]
)
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder:
          !task.reminder} : task)
    )
  }

  return (
     <div className="container">
      <Header title="Task Tracker"/>
      <AddTask />
      {tasks.length >0 ? (
      <Tasks tasks= {tasks} onDelete= {deleteTask} 
      onToggle={toggleReminder} />) : ('No Tasks to Show')}
    </div>
  );
}

export default App;
