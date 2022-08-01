import './App.css';
import { useState } from 'react';

function App() {
  
  const [todos, setTodos] = useState ([
    {name: "Buy shopping", priority: "high"},
    {name: "Clean bathroom", priority: "low"},
    {name: "Prep weekly food", priority: "high"}
  ]);

  const [newTodos, setNewTodos] = useState("");

  const deleteItem = (event, index) => {
    event.preventDefault();
    const copyTodos = [...todos];
    copyTodos.pop(index);
    setTodos(copyTodos);
  }

  const todosNodes = todos.map ( (item, index) => {
    return (
      <li key={index} className={item.priority === "high" ? "high" : "low"}>
        <span>
          {item.name}
        </span>
        {(item.priority === "high") ? <span className="high">HIGH!</span> : <span className="low">Low</span>
        }
        <form onSubmit={deleteItem}>
          <button onClick= { () => deleteItem(index) }>Done!</button>
        </form>
        </li>
    )
  })
  
  const handleTodosInput = (event) => {
    setNewTodos(event.target.value);
  }

// const radioButtons = document.querySelectorAll('input[name="someName"]');
// var selectedRadioButton;
// for (const radioButton of radioButtons) {
//   if (radioButton.checked) {
//     selectedRadioButton = radioButton.value;
//     break;
//   }
// }

  // const radioButton = document.querySelector('priority').value;

  const saveNewTodos = (event) => {
    event.preventDefault()
    const copyTodos = [...todos]
    copyTodos.push ({
      name: newTodos,
      priority: event.target.priority.value
    });
    setTodos(copyTodos);
    setNewTodos("");
  }
  
  return (
    <div className="App">

      <h1>ToDo's</h1>
      <hr></hr>

      <form onSubmit={saveNewTodos}>
        <label htmlFor="new-todos">Add new todo item:</label>
        <input 
        id="new-todos"
        type="text"
        value={newTodos}
        onChange = {handleTodosInput} />

        <input type="radio" name="priority" value="high" required/>
        <label htmlFor="high-todos">High</label>

        <input type="radio" name="priority" value="low" required/>
        <label htmlFor="high-todos">Low</label>

        <input type="submit" value="Save new todos" />
      </form>



      <ul>
        {todosNodes}
      </ul>


      
    </div>
  );
}

export default App;
