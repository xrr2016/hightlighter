import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: ''
  }

  handleInputChange = event => {
    const term = event.target.value
    if (term.length > 0) {
      this.setState({ term })
    }
  }

  handleSearch = () => { 
    const { term } = this.state
    this.props.handleSearch(term)
  }

  render = () => {
    const { term } = this.state
    return (
      <div>
        <input value={term}
          onChange={this.handleInputChange}
          onSubmit={this.handleSearch}
        />
      </div>
    )
  }
}

export default SearchBar
