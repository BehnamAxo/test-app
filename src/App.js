import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Moon from './components/Moon';
import Sun from './components/Sun';
import Navbar from './components/Navbar';


const baseURL = 'http://localhost:5000/tasks';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(baseURL);
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`${baseURL}/${id}`);
    const data = await res.json();

    return data;
  };

  const addTask = async (task) => {
    const res = await fetch(baseURL, { 
      method: 'POST',
      headers: {
      'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  }

  const deleteTask = async (id) => {
    await fetch(`${baseURL}/${id}`, { method: 'DELETE' });

    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`${baseURL}/${id}`, { 
      method: 'PUT',
      headers: {
      'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await res.json();
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task ));
  }

  return (
    <Router>
      <div>
      <Navbar/>
      <Sun/>
        <div className='container'>
          <Moon/>
          <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  {showAddTask && <AddTask onAdd={addTask} />}
                  {tasks.length > 0 ? (
                    <Tasks
                      tasks={tasks}
                      onDelete={deleteTask}
                      onToggle={toggleReminder}
                    />
                  ) : (
                    'There is no tasks left!'
                  )}
                </>
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App;
