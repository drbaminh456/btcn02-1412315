import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }

  componentDidMount(){
    fetch('https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=210faf4ab82b8d0fdd0e13dc09080003&page=&format=json&nojsoncallback=1&auth_token=72157671883283837-09ab5fff289c33c0&api_sig=ecb3664265d0b4ed699b8975989bbf25')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      let picArray = j.photos.photo.map((pic) => {
        
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <img alt="dogs" src={srcPath}></img>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.pictures}
        </p>
      </div>
    );
  }
}

export default App;