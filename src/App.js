import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <h1>
        My Todos
      </h1>
      <Todo text="one"/>
      <Todo text="two" />
      <Todo text="three" />
    </div>
  );
}

export default App;
