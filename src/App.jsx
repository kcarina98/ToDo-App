import { useState, useContext } from "react";
import "./App.css";
import ToDoForm from "./assets/components/ToDoForm";
import ToDoList from "./assets/components/ToDoList";
import Filter from "./assets/components/Filter";
import BigToDoForm from "./assets/components/BigToDoForm";
import { ThemeContext } from "./Context";
import Theme from "./assets/components/Theme";

function App() {
  const [theme, setTheme] = useState(false);
  const [toDos, setToDos] = useState([]);
  const [sortedToDos, setSortedToDos] = useState([]);
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(!check);
  };

  return (
    <section className={theme ? "dark" : null}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Theme />
        <h1>ToDo</h1>
        <div className="checkbox">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={check}
            onChange={checkHandler}
          />
          <label htmlFor="checkbox">Pro Version</label>
        </div>

        {check ? (
          <BigToDoForm setToDos={setToDos} />
        ) : (
          <ToDoForm setToDos={setToDos} />
        )}

        <Filter setSortedToDos={setSortedToDos} />
        <ToDoList items={toDos} setToDos={setToDos} />
      </ThemeContext.Provider>
    </section>
  );
}

export default App;
