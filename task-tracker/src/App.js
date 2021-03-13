import { useState } from "react";
//You only need to import React from 'react' if you're going to use the class method
// import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Strange appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at Xaviers",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Banking",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //delete task:
  const deleteTask = (id) => {
    console.log("delete", id);
  };

  //const and let can go here, and be referenced in the return
  // you reference variables and write expressions below with {}
  //FREX:
  // const name = "Andy"
  // const x = True
  //then in the code you could put...
  // <h1> hello my name is {name} </h1>
  //or...
  // <h2> hellow {x ? 'Yes' : 'No'} </h2>

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

// // This doesn't work - it's the class build
// class App extends React.Component {
//   render() {
//     return <h1>hello from a class</h1>;
//   }
// }

export default App;
