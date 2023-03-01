import { SummaryHeaderTodoList } from './SummaryHeaderTodoList'
import { TodoCheckBox } from './TodoCheckBox'

export function TodoList() {
  return (
    <div className="flex flex-col mt-16">
      <SummaryHeaderTodoList />

      <div className="flex flex-col gap-3">
        <TodoCheckBox />
      </div>
    </div>
  )
}
