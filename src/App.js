import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import DoneTodo from './pages/DoneTodo';
import NotDoneTodo from './pages/NotDoneTodo';
import AllTodo from './pages/AllTodo';
import TodoDetails from './pages/TodoDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<AllTodo />} />
        <Route path='/todo/done' element={<DoneTodo />} />
        <Route path='/todo/notdone' element={<NotDoneTodo />} />
        <Route path='/:todoId' element={<TodoDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
