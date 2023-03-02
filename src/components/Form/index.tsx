import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const taskFormSchema = z.object({
  query: z.string(),
})

type TaskFormData = z.infer<typeof taskFormSchema>

export function Form() {
  const { register, handleSubmit } = useForm<TaskFormData>({
    resolver: zodResolver(taskFormSchema),
  })

  function handleCreateNewTask(data: TaskFormData) {
    console.log(data)
  }

  return (
    <form
      className="mt-[-27px] flex gap-2"
      onSubmit={handleSubmit(handleCreateNewTask)}
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
