import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContextProvider'
import { SummaryHeaderTodoList } from './SummaryHeaderTodoList'
import { TodoCheckBox } from './TodoCheckBox'

export function TodoList() {
  const { todos } = useContext(TodoContext)

  return (
    <div className="flex flex-col mt-16">
      <SummaryHeaderTodoList />

      <div className="flex flex-col gap-3">
        {todos.map((todo) => {
          return (
            <TodoCheckBox
              id={todo.id}
              label={todo.label}
              mark={todo.mark}
              key={todo.id}
            />
          )
        })}
      </div>
    </div>
  )
}
