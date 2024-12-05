import AddTodo from './components/AddTodo'
import './App.css'
import TodoList from './components/TodoList'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <h1 className='font-bold text-3xl text-purple-500 text-center m-10'>Task Manager</h1>
      <AddTodo/>
      <TodoList/>
    </ThemeProvider>
  )
}

export default App
