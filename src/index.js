import _ from 'lodash'; // $npm install --save lodash
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import FeaturedVideo from './components/featured_video'
import Laura from './components/laura'

const API_KEY = 'AIzaSyCaYFCkiYUV9f5ggVlGq5eaPYhvi7n1Ojs';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch = this.videoSearch.bind(this)
    this.handleBobandLaura = this.handleBobandLaura.bind(this)
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });

    });
  }

  handleBobandLaura(divorce){
    this.setState({selectedVideo: divorce})
  }

  render(){
    return(
      <div>
        <SearchBar getVideo={this.videoSearch} />
        <FeaturedVideo selectedVideo={this.state.selectedVideo} />
        <Laura divorce={this.state.videos} handleBobandLaura={this.handleBobandLaura}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
