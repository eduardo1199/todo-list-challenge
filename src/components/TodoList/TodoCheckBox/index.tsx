import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'

export function TodoCheckBox() {
  return (
    <div className="flex gap-3 bg-gray-500 border border-gray-400 p-4 items-center rounded-lg shadow-regular">
      <Checkbox.Root
        defaultChecked
        id="c1"
        className="flex gap-3 items-center group"
      >
        <div className="h-5 w-5 rounded-full flex items-center justify-center border-2 border-blue group-data-[state=checked]:bg-purple-dark group-data-[state=checked]:border-0">
          <Checkbox.Indicator>
            <Check className="text-white" />
          </Checkbox.Indicator>
        </div>
        <label
          className="text-gray-100 text-sm font-normal cursor-pointer group-data-[state=checked]:line-through group-data-[state=checked]:text-gray-300"
          htmlFor="c1"
        >
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </label>
      </Checkbox.Root>
      <button type="button">
        <Trash size={14} className="text-gray-300" />
      </button>
    </div>
  )
}
