import React from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoContextProvider from './store/todos-context';

// const DUMMY_TODOS = [
//   new Todo('Learn React'),
//   new Todo('Learn Typescript')
// ];

function App() {  

  // const [todos,setTodos] = useState<Todo[]>(DUMMY_TODOS);

  // const addTodoHandler = (newTodoText:string) => {
  //     const tempTodo = new Todo(newTodoText)
  //     setTodos(prevTodos => [...prevTodos,tempTodo]);
  // }

  // const removeTodoHandler = (id:string) => {
  //     setTodos(prevTodos => {
  //       return prevTodos.filter(todo => todo.id !== id);
  //     })
  // }

  return (
    <TodoContextProvider>
        <NewTodo  />
        <Todos />
    </TodoContextProvider>
  );
}

export default App;
