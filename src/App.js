import React, { useState } from "react";
import './App.css';

function Todoapp(){
  const [itemsList, setItemList] = useState([]) //todo list items
  const [value, setValue] = useState('')   // todo item value
  const [error, setError] = useState('')  // set error  for todo input
  const change = (e) => {   // todo input onchange handler
    setError('')
    setValue(e.target.value)
  }
  const deleteListItems = (delid) => {   // delete todo items list from list array
    setItemList((prev) => {
      return prev.filter((cv, i) => {
        return i !== delid
      })
    })
  }
  const submit = () => {  // submit todo values
    const reWhiteSpace = new RegExp(/^\s+$/);  // check space in todo  value string
    if (value === '' || reWhiteSpace.test(value)) {
      setError('Enter valid itmes name')
    }
    else {
      setItemList((prev) => [...prev, value])
      setValue('')
    }
  }

  return (
    <>
      <div className='container'>
        <div className='wraper'>
          <h1 className='heading'>Todo app</h1>
          <input type='text' placeholder='Enter items' onChange={change} value={value} className='todoinput' />
          <button className='submit' title='add items' onClick={submit}>+</button>
          <p className='errorMessage'>{error}</p>
          <br></br>
          <div className='todolist'>
            {
              itemsList.map((cv, i) => {
                return (
                  <>
                    <p><i class="fa fa-times" style={{ 'color': 'red' }} onClick={() => deleteListItems(i)}></i>  {cv}</p>

                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoapp;
