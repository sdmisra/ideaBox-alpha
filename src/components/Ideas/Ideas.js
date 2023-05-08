import React from 'react';
import './Ideas.css';

const Ideas = ({ideas}) => {
  console.log(ideas)
  const ideaMap = ideas.map((idea) => {
    return (
    <section className="an-idea" key={idea.id}>
    <h1 id={idea.id}>{idea.title}</h1>
    <p>{idea.description}</p>
    </section>
  )})

  return (
    <h2 className="ideas-container">
      {ideaMap}
    </h2>
  )
}

export default Ideas;