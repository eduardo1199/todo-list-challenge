import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import uuid from 'react-uuid'
import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContextProvider'

interface Todo {
  label: string
  id: string
  mark: boolean
}

const todoFormSchema = z.object({
  query: z.string().min(1),
})

type TodoFormData = z.infer<typeof todoFormSchema>

export function Form() {
  const { register, handleSubmit, reset } = useForm<TodoFormData>({
    resolver: zodResolver(todoFormSchema),
  })

  const { addNewTodo } = useContext(TodoContext)

  function handleCreateNewTodo(data: TodoFormData) {
    const newTodo: Todo = {
      id: uuid(),
      label: data.query,
      mark: false,
    }

    addNewTodo(newTodo)

    reset()
  }

  return (
    <form
      className="mt-[-27px] flex gap-2"
      onSubmit={handleSubmit(handleCreateNewTodo)}
    >
      <input
        className="bg-gray-500 rounded-lg w-[638px] p-4 h-[54px] border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-dark"
        placeholder="Adicione uma nova tarefa"
        {...register('query')}
      />
      <button
        type="submit"
        className="flex flex-1 h-[52px] justify-center items-center gap-8 rounded-lg focus:ring-purple-dark focus:ring-2 bg-blue-dark focus:outline-none hover:bg-blue transition-colors"
      >
        <p className="text-gray-200 font-bold text-sm">Criar</p>
      </button>
    </form>
  )
}
