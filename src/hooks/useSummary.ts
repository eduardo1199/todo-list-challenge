import { useContext } from 'react'
import { TodoContext } from '../context/TodoContextProvider'

export function useSummary() {
  const { todos } = useContext(TodoContext)

  const summary = todos.reduce(
    (acc, todo) => {
      if (todo.mark) {
        acc.finished += 1
      }

      acc.total += 1

      return acc
    },
    {
      total: 0,
      finished: 0,
    },
  )

  return summary
}
