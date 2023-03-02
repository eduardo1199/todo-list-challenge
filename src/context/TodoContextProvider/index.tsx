import { createContext, ReactNode, useState } from 'react'

interface Todo {
  label: string
  id: string
  mark: boolean
}

interface TodoContentContext {
  todos: Todo[]
  addNewTodo: (todo: Todo) => void
  markerTodoWithFinish: (id: string) => void
  removeTodo: (id: string) => void
}

interface TodoContextProviderProps {
  children: ReactNode
}

export const TodoContext = createContext({} as TodoContentContext)

export function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([])

  function addNewTodo(todo: Todo) {
    setTodos((state) => [...state, todo])
  }

  function markerTodoWithFinish(id: string) {
    setTodos((state) =>
      state.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, mark: true }
        } else {
          return todo
        }
      }),
    )
  }

  function removeTodo(id: string) {
    const todosWithRemovedTask = todos.filter((todo: Todo) => todo.id !== id)

    setTodos(todosWithRemovedTask)
  }

  return (
    <TodoContext.Provider
      value={{ todos, addNewTodo, markerTodoWithFinish, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  )
}
