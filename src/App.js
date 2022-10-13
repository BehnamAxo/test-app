import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
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

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000);
    const newTask = {
      id,
      ...task
    };

    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const toggleReminder = (id) => setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ));

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      { showAddTask && <AddTask onAdd={addTask} /> }
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'There is no tasks left!' }
    </div>
  );
}

export default App;
