import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'  
import SearchBar from '../components/search_bar'
import VideoList from '../components/video_list'
import { key } from '../api_key'

// YTSearch({ key, term: 'mac pro' }, (res) => { 
//   console.log(res)
// })

class App extends Component {
  state = {
    videos: [1, 2, 3, 4, 5]
  }
  
  handleSearch = (term) => {
    if (term) { 
      YTSearch({ key, term }, (videos) => {
        console.log(videos)
        this.setState({ videos })
      })
    }
  }

  render= () => {
    return (
      <div className="container">
        <SearchBar handleSearch={this.handleSearch} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App