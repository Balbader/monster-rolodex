import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {                                       // wait for the component to mount
    fetch('https://jsonplaceholder.typicode.com/users')       // fetch our users from the json file
      .then(response => response.json())                      // .json() will give us back the response in a json format 
      .then(users => this.setState({ monsters: users }))      // setting the monsters to this array of users
  }

  render() {
    return (
      <div className="App">
        <CardList name='Basil'>
          {
            this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
          }
        </CardList>
      </div>
    );
  }
}

export default App;
