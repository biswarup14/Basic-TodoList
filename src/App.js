import AddTodo from './components/AddTodo/AddTodo'
import './App.css';
import List from './components/List/List'

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
     <AddTodo />
     <List />
    </div>
  );
}

export default App;
