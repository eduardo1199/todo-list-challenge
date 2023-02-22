import logo from './assets/Logo.svg'

export function App() {
  return (
    <div className="h-screen">
      <div className="h-[200px] w-full flex items-center justify-center bg-gray-700">
        <img src={logo} alt="Rocket todo list" />
      </div>
      <div className="flex w-full justify-center">
        <div className="w-[736px] ">
          <form className="mt-[-27px] flex gap-2">
            <input 
              type="text" 
              className="bg-gray-500 rounded-lg w-[638px] p-4 h-[54px] border border-gray-700" 
              placeholder="Adicione uma nova tarefa" 
            />
            <button type="button" className="flex flex-1 h-[52px] justify-center items-center gap-8 rounded-lg bg-blue-dark hover:bg-blue transition-colors">
              <p className="text-gray-200 font-bold text-sm">Criar</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}