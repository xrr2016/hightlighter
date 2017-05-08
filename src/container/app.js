import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'  
import SearchBar from '../components/search_bar'
import VideoList from '../components/video_list'
import VideoDetail from '../components/video_detail'
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
    YTSearch({ key, term: 'macbook pro' }, (videos) => { 
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
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App