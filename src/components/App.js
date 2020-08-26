import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../apis/youtube';

class App extends React.Component {
  // Send a request to api
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term,
      },
    });

    console.log(response);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
