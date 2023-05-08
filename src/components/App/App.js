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
    this.setState({ideas : savedIdeas})
  }

  render() {
    return (
      <section className="main-container">
        <h1 className="title">Ideabox</h1>
        {!this.state.ideas.length && <h2>No ideas yet! Use the form below to add a few...</h2>}
        < Ideas ideas={this.state.ideas} />
        < Form />
      </section>
    )
  }
}

export default App;