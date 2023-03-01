// import { Clipboard } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'
import { Form } from './components/Form'
import { Header } from './components/Header'

export function App() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex w-full justify-center">
        <div className="w-[736px]">
          <Form />
          {/* <div className="flex flex-col mt-16">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-bold text-blue">
                  Tarefas criadas
                </span>
                <div className="px-2 py-[2px] bg-gray-400 rounded-full text-gray-200 font-bold text-xs">
                  <p>0</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-sm font-bold text-purple">
                  Concluídas
                </span>
                <div className="px-2 py-[2px] bg-gray-400 rounded-full text-gray-200 font-bold text-xs">
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-t border-gray-300 rounded-t-lg rounded-r-lg">
              <Clipboard size={56} className="text-gray-400 mt-16" />
              <strong className="block mt-4 font-bold text-base text-gray-300">
                Você ainda não tem tarefas cadastradas
              </strong>
              <span className="text-base text-gray-300">
                Crie tarefas e organize seus itens a fazer
              </span>
            </div>
          </div> */}

          <div className="flex flex-col mt-16">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2 items-center">
                <span className="text-sm font-bold text-blue">
                  Tarefas criadas
                </span>
                <div className="px-2 py-[2px] bg-gray-400 rounded-full text-gray-200 font-bold text-xs">
                  <p>0</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-sm font-bold text-purple">
                  Concluídas
                </span>
                <div className="px-2 py-[2px] bg-gray-400 rounded-full text-gray-200 font-bold text-xs">
                  <p>2 de 5</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 bg-gray-500 border border-gray-400 p-4 items-center rounded-lg shadow-regular">
                <Checkbox.Root
                  defaultChecked
                  id="c1"
                  className="flex gap-3 bg-gray-500 items-center group"
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
                    Integer urna interdum massa libero auctor neque turpis
                    turpis semper. Duis vel sed fames integer.
                  </label>
                </Checkbox.Root>
                <button type="button">
                  <Trash size={14} className="text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
