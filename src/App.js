import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super(); 

    // array of the players
      this.state = {
       ballers: []
    };
  }

  //making an api call to the url, fetching data and converting to js, setting users to the ballers array  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ ballers: users}))
  }

  render() {
    return(
      <div className="App">
        <CardList ballers={this.state.ballers}>
          {this.state.ballers.map(ballers =>( 
           <h1 key={ballers.id}> {ballers.name } </h1>))}
        </CardList>
    </div>

    );
  }
};



export default App;


