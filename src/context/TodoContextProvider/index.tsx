import { createContext, ReactNode, useState } from 'react'

interface Todo {
  label: string
  id: string
  mark: boolean
}

interface TodoContentContext {
  todos: Todo[]
  addNewTodo: (todo: Todo) => void
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

  return (
    <TodoContext.Provider value={{ todos, addNewTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
