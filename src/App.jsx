import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, favorite, deleteTodo } from "./features/functions";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  const [text, setText] = useState("");
  const selector = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      selector.find((item) => item.text.toUpperCase() === text.toUpperCase())
    ) {
      return false;
    }
    if (!text.trim()) {
      return false;
    }
    dispatch(
      addTodo({
        text: text,
        favorite: false,
      })
    );
    setText("");
  };
  const inputHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const makeFavorite = (i) => {
    dispatch(favorite(i));
  };

  const deleteTodos = (i) => {
    dispatch(deleteTodo(i));
  };

  return (
    <>
      <div className="app">
        <Header />
        <Form
          submitHandler={submitHandler}
          text={text}
          inputHandler={inputHandler}
        />
        <Todo
          makeFavorite={makeFavorite}
          deleteTodos={deleteTodos}
          selector={selector}
        />
      </div>
    </>
  );
}

export default App;
