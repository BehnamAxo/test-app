import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 6th at 2:44 p.m.',
          reminder: true
      },
      {
          id: 2,
          text: 'Meeting  with Dr. Douglas Shepherd',
          day: 'Feb 8th at 4:30 p.m.',
          reminder: false
      },
      {
          id: 3,
          text: 'Grocery Shopping',
          day: 'Feb 12th at 8:30 a.m.',
          reminder: false
      },
      {
          id: 4,
          text: 'Gym time',
          day: 'Feb 21st at 6:00 a.m.',
          reminder: true
      }
  ]);


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'There is no tasks left!'}
    </div>
  );
}

export default App;
