import React, { Component } from 'react'
import savedIdeas  from '../../data/cardData';
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }
  componentDidMount() {
    this.setState({ ideas : savedIdeas })
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] })
  }

  deleteIdea = (id) => {
    console.log(id);
    const filteredIdeas = this.state.ideas.filter(idea => idea.id != id);
    this.setState({ ideas: filteredIdeas });
  }

  render() {
    return (
      <section className="main-container">
        <h1 className="title">Ideabox</h1>
        {!this.state.ideas.length && <h2>No ideas yet! Use the form below to add a few...</h2>}
        < Ideas ideas={this.state.ideas}  deleteIdea={this.deleteIdea}/>
        < Form addIdea={this.addIdea} />
      </section>
    )
  }
}

export default App;