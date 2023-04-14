import React from 'react'

const TodoItemTemp = ({title,description,isCompleted}) => {
  return (
    <div style={{backgroundColor : isCompleted ? '#c5d9a5' : '#e697a4'}}>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Status : {isCompleted ? 'Done🤗' : 'Not Done☹️'}</p>
    </div>
  )
}

export default TodoItemTemp
