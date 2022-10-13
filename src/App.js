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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;


// import React  from "react";

// class App extends React.Component {
//   render() {
//     return <h1>Test with a class</h1>
//   }
// }
