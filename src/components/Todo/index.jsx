import TodoMap from "./TodoMap";
const Todo = (props) => {
  return (
    <div className="todoList">
      {props.selector.map((item, index) => {
        return (
          <TodoMap
            index={index}
            key={index}
            makeFavorite={props.makeFavorite}
            item={item}
            deleteTodos={props.deleteTodos}
          />
        );
      })}
    </div>
  );
};

export default Todo;
