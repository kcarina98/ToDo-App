export default function FilterButton(props) {
  return (
    <button
      onClick={() => props.setFilterBy(props.sort)}
      className="filter-button"
    >
      {props.text}
    </button>
  );
}
