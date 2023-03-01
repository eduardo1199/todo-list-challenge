import { Form } from './components/Form'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'

export function App() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex w-full justify-center">
        <div className="w-[736px]">
          <Form />

          <TodoList />
        </div>
      </div>
    </div>
  )
}
