import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
  return (
    <section className="to-do-list">
      <h3>Meine To Do's:</h3>
      {props.items?.map((item, key) => (
        <ToDoItem todo={item} key={key} setToDos={props.setToDos} />
      ))}
    </section>
  );
}
