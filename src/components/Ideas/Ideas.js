import React from 'react';
import Card from '../Card/Card';
import './Ideas.css';

const Ideas = ({ideas, deleteIdea}) => {
  const ideaCards = ideas.map((idea) => {
    return (
      <Card
        title = {idea.title}
        description = {idea.description}
        id = {idea.id}
        key = {idea.id}
        deleteIdea = {deleteIdea}
      />
  )})

  return (
    <h2 className="ideas-container">
      {ideaCards}
    </h2>
  )
}

export default Ideas;