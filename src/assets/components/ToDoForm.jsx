export default function ToDoForm(props) {
  function addToDo(e) {
    if (e.key === "Enter" && e.target.value.length > 0) {
      const task = taskBuilder(e.target.value);
      props.setToDos((prev) => {
        return [...prev, task];
      });
      e.target.value = "";
    }
  }

  function taskBuilder(inputTask) {
    return {
      task: inputTask,
      done: false,
    };
  }

  return (
    <section className="to-do-form">
      <input
        onKeyDown={addToDo}
        type="text"
        name="task"
        placeholder="your new task"
      />
    </section>
  );
}
