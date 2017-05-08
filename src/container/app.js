import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'  
import SearchBar from '../components/search_bar'
import VideoList from '../components/video_list'
import { key } from '../api_key'

// YTSearch({ key, term: 'mac pro' }, (res) => { 
//   console.log(res)
// })

class App extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      videos: []
    }
  }
  componentDidMount() { 
    YTSearch({ key, term: 'react' }, (videos) => { 
      this.setState({ videos })
    })
  }
  
  // handleSearch = (term) => {
  //   if (term) { 
  //     YTSearch({ key, term }, (videos) => {
  //       console.log(videos)
  //       this.setState({ videos })
  //     })
  //   }
  // }

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