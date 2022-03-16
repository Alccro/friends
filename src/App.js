import React, { Component } from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            friends: [],
            searchField: ''
        }
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({friends: users}));
}

    onSearchChange= (event) => {
        this.setState({ searchField: event.target.value })
    }
    
    render() {
        const filteredFriends = this.state.friends.filter(friend => {
            return friend.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.friends.length === 0) {
            return <h1 className='tc'>Give me a sec to find some friends for you</h1>
        } else {
            return (
               <div  className='tc'>
                   <h1 className='fw7 b f1 hot-pink'>Loyal Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList friends={filteredFriends} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;