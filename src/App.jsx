import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.statusText);
      }
      const data = await response.json();
      const formattedData = data.map(todo => ({
        id: todo.id,
        text: todo.title,
        category: 'Pessoal',
        isCompleted: todo.completed
      }));
      setTodos(formattedData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = (text, category) => {
    const newTodo = {
      id: Math.max(...todos.map(todo => todo.id), 0) + 1,
      text,
      category,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  const getFilteredAndSortedTodos = () => {
    return todos
      .filter(todo => {
        if (filter === "All") return true;
        return filter === "Completed" ? todo.isCompleted : !todo.isCompleted;
      })
      .filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => sort === "Asc"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text));
  };

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      {loading && <p>Carregando...</p>}
      {error && <p className="error">Erro: {error}</p>}
      
      <div className='lista-tarefas'>
        {getFilteredAndSortedTodos().map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
