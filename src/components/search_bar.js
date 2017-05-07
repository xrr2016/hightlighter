import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    word: ''
  }

  handleInputChange = (event) => { 
    this.setState({ word: event.target.value })
  }

  render = () => {
    return (
      <div>
        <p>{this.state.word}</p>
        <input onChange={this.handleInputChange} />             
      </div>
    )
  }
}

export default SearchBar