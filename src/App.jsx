import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, favorite, deleteTodo } from './features/counter';

function App() {
  const [text, setText] = useState("")
  const selector = useSelector((state)=>state.items)
  const dispatch = useDispatch()
  
  const submitHandler = (e) => {
    e.preventDefault()
    if(selector.find((item)=>item.text.toUpperCase()===text.toUpperCase())){
      return false
    }
    if(!text.trim()){

        return false
    }
    dispatch(addTodo({
      text: text,
      favorite: false
    }))
    setText("")
  }
  const inputHandler = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }

 const makeFavorite = (i) => {
   dispatch(favorite(i))
 }

 const deleteTodos = (i) => {
   dispatch(deleteTodo(i))
 }


  return (<>
  <div className='app'>
    <header>
    Todo
    </header>
    <form className='form' onSubmit={submitHandler}>
      <input type="text" placeholder='text here' value={text} onChange={inputHandler}/>
      <button  disabled={!text} >Add</button>
    </form>
    <div className='todoList'>
    {selector.map((item, index)=>{

    return (<div key={index} className={`favorite ${item.favorite ? "favorite selected" : ""}`}>
      <button className='star' onClick={()=>makeFavorite(index)}>
    ⭐️
      </button>
      <p>{item.text}</p>
      <button className='x' onClick={()=>deleteTodos(index)}>
    ❌
      </button>
    </div>)
    })}
    </div>

  </div>
 
  </>
  )
}

export default App;
