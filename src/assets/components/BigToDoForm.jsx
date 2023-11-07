export default function BigToDoForm(props) {
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
    <section className="big-form">
      <input
        onKeyDown={addToDo}
        type="text"
        name="task"
        placeholder="your new task"
      />
      <input type="datetime" name="" id="" placeholder="Zieldatum" />
      <div className="select-div">
        <select name="Katergorie" id="">
          <option value="privat">privat</option>
          <option value="job">beruflich</option>
          <option value="sport">Sport</option>
          <option value="shopping">einkaufen</option>
        </select>
        <select name="Prio" id="">
          <option value="1">sehr wichtig</option>
          <option value="2">wichtig</option>
          <option value="3">nicht so wichtig</option>
          <option value="4">just for fun</option>
        </select>
      </div>
    </section>
  );
}
