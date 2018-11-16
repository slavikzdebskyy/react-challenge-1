import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

import { userData } from './data';

export default class App extends Component {
  constructor(props) {
		super(props)
		this.state = {
			users: userData
		};	
  }
  
  sortByRange = (prevEl, nextEl, range) =>{
    if (range) {
      return prevEl < nextEl ? -1 : 1
    } else {
      return prevEl > nextEl ? -1 : 1
    }
  }

  sortByValue = (value, range) => {   
    const newSortArr = this.state.users
          .slice()
          .sort((prevEl,nextEl) => this.sortByRange(prevEl[value], nextEl[value], range));
          this.setState({
            users: newSortArr
          }); 
  }
  

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age sortByValue={this.sortByValue}></Age>
          <Name sortByValue={this.sortByValue}></Name>
          <Points sortByValue={this.sortByValue}></Points>
          <Rank sortByValue={this.sortByValue}></Rank>
        </div>
        <div className="text-center buttons">
          <Table users = {this.state.users}></Table>
        </div>
      </div>
    );
  }
}

