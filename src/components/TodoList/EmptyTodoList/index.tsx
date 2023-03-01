import { Clipboard } from 'phosphor-react'

export function EmptyTodoList() {
  return (
    <div className="flex flex-col justify-center items-center border-t border-gray-300 rounded-t-lg rounded-r-lg">
      <Clipboard size={56} className="text-gray-400 mt-16" />
      <strong className="block mt-4 font-bold text-base text-gray-300">
        Você ainda não tem tarefas cadastradas
      </strong>
      <span className="text-base text-gray-300">
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  )
}
