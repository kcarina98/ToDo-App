import { useEffect, useState } from "react";
import FilterButton from "./Filterbutton";
import ToDoItem from "./ToDoItem";

export default function Filter(props) {
  const [filterBy, setFilterBy] = useState(0);

  useEffect(() => {
    if (filterBy !== 0) filter();
  }, [filterBy]);

  function filter() {
    switch (filterBy) {
      case 0:
      case 1:
        return;
      case 2:
        return <p>Erledigt</p>;
      case 3:
        return <p>noch offen</p>;
    }
  }

  return (
    <>
      <section className="filter">
        <FilterButton text="alle Aufgaben" setFilterBy={setFilterBy} sort={1} />
        <FilterButton
          text="noch nicht erledigt"
          setFilterBy={setFilterBy}
          sort={2}
        />
        <FilterButton text="erledigt" setFilterBy={setFilterBy} sort={3} />
      </section>
    </>
  );
}
