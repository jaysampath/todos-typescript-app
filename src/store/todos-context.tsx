import React from "react";
import { useState } from "react";

import Todo from "../models/todo";

type TodosContextObj = {
items:Todo[];
addTodo: (text:string) => void;
removeTodo: (id:string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items:[],
    addTodo: (text:string) => {},
    removeTodo: (id:string) => {}
})

const DUMMY_TODOS = [
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ];


const TodoContextProvider: React.FC<{}> = (props) => {

     const [todos,setTodos] = useState<Todo[]>(DUMMY_TODOS);

  const addTodoHandler = (newTodoText:string) => {
      const tempTodo = new Todo(newTodoText)
      setTodos(prevTodos => [...prevTodos,tempTodo]);
  }

  const removeTodoHandler = (id:string) => {
      setTodos(prevTodos => {
        return prevTodos.filter(todo => todo.id !== id);
      })
  }

  const contextValue: TodosContextObj = {
      items:todos,
      addTodo:addTodoHandler,
      removeTodo:removeTodoHandler
  }

    return <TodosContext.Provider value={contextValue}>
         {props.children}
    </TodosContext.Provider>

}

export default TodoContextProvider;
