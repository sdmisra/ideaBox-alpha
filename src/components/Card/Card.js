import React from 'react'

const Card = ({ title, description, id, deleteIdea }) => {
  return (
    <div className='an-idea' key={id} id={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => {deleteIdea(id)}}>X</button>
    </div>
  )
}

export default Card;