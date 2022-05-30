const TodoMap = (props) => {
  return (
    <>
      <div
        key={props.index}
        className={`favorite ${props.item.favorite ? "favorite selected" : ""}`}
      >
        <button
          className="star"
          onClick={() => props.makeFavorite(props.index)}
        >
          ⭐️
        </button>
        <p>{props.item.text}</p>
        <button className="x" onClick={() => props.deleteTodos(props.index)}>
          ❌
        </button>
      </div>
    </>
  );
};

export default TodoMap;
