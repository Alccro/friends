import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import { friends } from './friends';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            friends: friends,
            searchField: ''
        }
    }

    onSearchChange= (event) => {
        this.setState({ searchField: event.target.value })
    }
    
    render() {
        const filteredFriends = this.state.friends.filter(friends => {
            return friends.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
           <div  className='tc'>
               <h1 className='fw7 b f1 hot-pink'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList friends={filteredFriends} />
            </div>
        );
    }
}

export default App;