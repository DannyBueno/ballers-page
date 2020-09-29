import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends Component {
  constructor() {
    super(); 

    // array of the players
      this.state = {
       ballers: [],
       searchField: ''
    };
  }

  //making an api call to the url, fetching data and converting to js, setting users to the ballers array  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ ballers: users}))
  }

  render() {
      //Object destructuring 
       const { ballers, searchField } =  this.state;
       //filtering the search input 
       const filteredBallers = ballers.filter(ballers =>
        ballers.name.toLowerCase().includes(searchField.toLowerCase())
        );

    return(
      <div className="App">
        
          <SearchBox
            placeholder='search ballers'
            handleChange={e => 
              this.setState({ searchField: e.target.value})}
         />
        <CardList ballers={filteredBallers}/>
         
    </div>

    );
  }
};



export default App;


