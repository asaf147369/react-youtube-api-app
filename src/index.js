//libraries
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//components
import SearchBar from './components/search_bar';

//youtube-api
const API_KEY = 'AIzaSyDEM2MhPJgBp1S8c1C-Rd2D2CfZyyqwjL0';

// Create a new component. this component should produce some HTML

class App extends Component {
constructor(props){
  super(props);

  this.state = { videos : [] };

  YTSearch({
    key: API_KEY,
    term: 'surfboards'
  }, (videos) => {
    this.setState({ videos });
    //video: video -- {videos}
  });
}

  render() {
    return (<div>
      <SearchBar/>
    </div>);
  }
}

//Take this component's generated HTML and put it in the DOM

ReactDOM.render(<App/>, document.querySelector('.container'));
