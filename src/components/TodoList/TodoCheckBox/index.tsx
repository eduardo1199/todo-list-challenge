import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { TodoContext } from '../../../context/TodoContextProvider'

interface TodoCheckBoxProps {
  id: string
  label: string
  mark: boolean
}

export function TodoCheckBox({ id, label, mark }: TodoCheckBoxProps) {
  const { toggleMarkTask, removeTodo } = useContext(TodoContext)

  function handleCheckTodo(id: string) {
    toggleMarkTask(id)
  }

  function handleRemoveTodo(id: string) {
    removeTodo(id)
  }

  return (
    <div className="flex gap-3 bg-gray-500 border border-gray-400 p-4 items-center rounded-lg shadow-regular justify-between">
      <Checkbox.Root
        defaultChecked
        id={id}
        className="flex gap-3 items-center group"
        checked={mark}
        onCheckedChange={() => handleCheckTodo(id)}
      >
        <div className="h-5 w-5 rounded-full flex items-center justify-center border-2 border-blue group-data-[state=checked]:bg-purple-dark group-data-[state=checked]:border-0">
          <Checkbox.Indicator>
            <Check className="text-white" />
          </Checkbox.Indicator>
        </div>
        <label
          className="text-gray-100 text-sm font-normal cursor-pointer group-data-[state=checked]:line-through group-data-[state=checked]:text-gray-300"
          htmlFor={id}
        >
          {label}
        </label>
      </Checkbox.Root>
      <button type="button" onClick={() => handleRemoveTodo(id)}>
        <Trash size={14} className="text-gray-300" />
      </button>
    </div>
  )
}
