import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

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
  return (
     <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks= {tasks}/>
    </div>
  );
}

export default App;
