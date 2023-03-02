import { useSummary } from '../../../hooks/useSummary'

export function SummaryHeaderTodoList() {
  const { finished, total } = useSummary()

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-2 items-center">
        <span className="text-sm font-bold text-blue">Tarefas criadas</span>
        <div className="px-2 py-[2px] bg-gray-400 rounded-full text-gray-200 font-bold text-xs">
          <p>{total}</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-sm font-bold text-purple">Concluídas</span>
        <div className="px-2 py-[2px] bg-gray-400 rounded-full text-gray-200 font-bold text-xs">
          {total === 0 ? (
            <p>{total}</p>
          ) : (
            <p>
              {finished} de {total}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
