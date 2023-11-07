import { useState } from "react";

export default function ToDoItem({ todo, setToDos }) {
  const [done, setDone] = useState(todo.done);
  function changeDone() {
    todo.done = !todo.done;
    setDone(todo.done);
  }

  function deleteTodo() {
    setToDos((prev) => {
      return prev.filter((item) => item.task !== todo.task);
    });
  }
  return (
    <section onClick={changeDone} className={todo.done ? "done" : ""}>
      <p className="p-tag">{todo.task}</p>
      {done && <button onClick={deleteTodo}>🗑</button>}
    </section>
  );
}
