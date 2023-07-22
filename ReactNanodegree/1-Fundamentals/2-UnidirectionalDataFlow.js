/**
 * Data moves differently with React's unidirectional data flow. In React, the data flows from the parent component to a child component.
 * 
 * we have two components:
 * ==> A parent component
 * ==> A child component
 * The data lives in the parent component and is passed down to the child component. 
 * Even though the data lives in the parent component, both the parent and the child components can use the data. 
 * However, if the data must be updated, then only the parent component should perform the update. 
 * If the child component needs to make a change to the data, then it would send the updated data to the parent component 
 * where the change will actually be made. Once the change is made in the parent component, 
 * the child component will be passed the data (that has just been updated!).
 */

//example
// App.js
import React, { useState } from 'react';
import ParentComponent from './ParentComponent';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ParentComponent todos={todos} addTodo={addTodo} />
    </div>
  );
};

export default App;

// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = ({ todos, addTodo }) => {
  return (
    <div>
      <ChildComponent addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

//export default ParentComponent;

// ChildComponent.js
import React, { useState } from 'react';

const ChildComponent = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

//export default ChildComponent;

/**
 * In this example, the App component holds the state variable todos and the addTodo function. 
 * The addTodo function is responsible for updating the todos state by appending a new todo item to the existing list.
 * The ParentComponent receives the todos state and the addTodo function as props. 
 * It renders the ChildComponent and displays the list of todos.The ChildComponent has its own local state inputValue, 
 * which represents the value of the input field. When the input value changes, it updates the local state using the setInputValue function. 
 * When the "Add Todo" button is clicked, it calls the addTodo function passed from the parent component, 
 * passing the current inputValue as the new todo item. After adding the todo, it resets the input value to an empty string.
 */