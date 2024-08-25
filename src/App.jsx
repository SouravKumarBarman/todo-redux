import AddTodo from './components/AddTodo'
import './App.css'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='font-bold text-3xl text-white'>Learn Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
