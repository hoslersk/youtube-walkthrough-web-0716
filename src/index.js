import _ from 'lodash'; // $npm install --save lodash
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCaYFCkiYUV9f5ggVlGq5eaPYhvi7n1Ojs';

class App extends React.Component {
  constructor() {
    super()
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });

    });
  }

  render(){
    return(

    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
