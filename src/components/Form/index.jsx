const Form = (props) => {
  return (
    <>
      <form className="form" onSubmit={props.submitHandler}>
        <input
          type="text"
          placeholder="text here"
          value={props.text}
          onChange={props.inputHandler}
        />
        <button disabled={!props.text}>Add</button>
      </form>
    </>
  );
};

export default Form;
