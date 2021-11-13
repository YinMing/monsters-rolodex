import logo from './logo.svg';
import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
      .then(monsters => { this.setState({ monsters }) });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
        {/* <input type="search" placeholder="search monsters" onChange={e => this.setState({ searchField: e.target.value })} /> */}
        <CardList monsters={filterMonsters}>
          
        </CardList>
        
      </div>

    )

  }
}


export default App;
