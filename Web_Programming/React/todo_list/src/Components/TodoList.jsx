import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInput, setListInput] = useState({});


  const handleAddTodo = () => {

    if (headingInput.trim() !== '') {
      setTodos([...todos, {heading: headingInput, lists: []}])
      setHeadingInput('');
    }
  }

  const handleDeleteTodo = (i) => {
    const newTodos = todos.filter((item, index) =>  i !== index );
    console.log(newTodos);
    setTodos(newTodos);
  }

  const handleAddList = (index) => {
    if (listInput[index].trim() !== '') {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInput[index]);
      setTodos(newTodos);
      setListInput({...listInput, [index]: ''})
    }
  }

  const handleListInputChange = (index, value) => {
    setListInput({ ...listInput, [index]: value })
  }

  const handleClearList = (index) => {
    const newTodo = [...todos];
    newTodo[index].lists = [];

    setTodos(newTodo);
  }

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={ headingInput }

            onChange={ (e) => { setHeadingInput(e.target.value) } }
            
          />
          <button className="add-list-button" onClick={ handleAddTodo }>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        { todos.map( (todo,index) => {
          return (
            <div key={ index } className="todoCard">
              <div className="todoHeading">
                <h3>{ todo.heading }</h3>
              </div>
              <button className="deleteButton" onClick={ () => handleDeleteTodo(index) }>Delete Heading</button>
              <div className="todoList">
                <ul>
                  { todo.lists.map( item => {
                    return (
                      <li>
                        { item }
                      </li>
                    )
                  }) }
                </ul>
              </div>
              <div className='add_list'>
              <input
                type="text"
                className="list-input"
                placeholder="Add List"
                value={listInput[index] || ''}
                onChange={(e) => handleListInputChange(index, e.target.value)}/>
              <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
              <button className="deleteList" onClick={ () => handleClearList(index) }>Clear List</button>
            </div>
            </div>
          )
        })}
      </div>
    </>
  )
}


export default TodoList;

