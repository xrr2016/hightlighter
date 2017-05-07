import React, { Component } from 'react'

class VieoList extends Component {
  render() {
    const { videos } = this.props
    return (
      <ul className="col-md-4 list-group">
        {videos.map((video) => <li key={video}>{video}</li> )}
      </ul>
    )
  }
}

export default VieoList