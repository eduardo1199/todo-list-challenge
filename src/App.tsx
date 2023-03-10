import { Form } from './components/Form'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { TodoContextProvider } from './context/TodoContextProvider'

export function App() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex w-full justify-center over">
        <div className="w-[736px]">
          <TodoContextProvider>
            <Form />

            <TodoList />
          </TodoContextProvider>
        </div>
      </div>
    </div>
  )
}
