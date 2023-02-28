// import { Clipboard } from 'phosphor-react'
import logo from './assets/Logo.svg'

import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from 'phosphor-react'

export function App() {
  return (
    <div className="h-screen">
      <div className="h-[200px] w-full flex items-center justify-center bg-gray-700">
        <img src={logo} alt="Rocket todo list" />
      </div>
      <div className="flex w-full justify-center">
        <div className="w-[736px]">
          <form className="mt-[-27px] flex gap-2">
            <input
              type="text"
              className="bg-gray-500 rounded-lg w-[638px] p-4 h-[54px] border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-dark"
              placeholder="Adicione uma nova tarefa"
            />
            <button
              type="submit"
              className="flex flex-1 h-[52px] justify-center items-center gap-8 rounded-lg focus:ring-purple-dark focus:ring-2 bg-blue-dark focus:outline-none hover:bg-blue transition-colors"
            >
              <p className="text-gray-200 font-bold text-sm">Criar</p>
            </button>
          </form>
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
