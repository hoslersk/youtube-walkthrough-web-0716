import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event){
    this.setState({term: event.target.value})
    this.props.getVideo(this.state.term)
  }

  render(){
    return(
      <div>
        <form>
          <input onChange={this.handleInputChange}/>
        </form>
      </div>
    )
  }

}

export default SearchBar;
