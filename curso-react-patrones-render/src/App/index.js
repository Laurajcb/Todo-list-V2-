import React, { useState } from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


function App() {

  // explanations of componet composition: pay attention to the componets functionality and make sure to be consistente with the info
  const [state, setState] = React.useState('estado compartido');

  return (
    <React.Fragment>
      <TodoHeader>

        <TodoCounter />
        <TodoSearch />

      </TodoHeader>

      <TodoList>

        <TodoItem state={state} />

      </TodoList>
    </React.Fragment>
  )
}

function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  )
}

function TodoList({ children }) {
  return (
    <section className="TodoList-container">
      {children}
    </section>
  )
}

function TodoCounter() {
  return (
    <p>Counter</p>

  )
}


function TodoSearch() {
  return (
    <p>Search</p>
  )
}

function TodoItem({state}) {
  return (
    <p>Items : {state}</p>

  )
}




/*
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
*/

export default App;
