import React from "react";
// import { robots } from './robots';
import SearchBox from './SearchBox';
import CardList from './CardList';
import './App.css';
import Scroll from "./Scroll";

class App extends React.Component {

    constructor() {

        super()
        this.state = {
            robotsState: [],
            searchfield: ''
        }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(
                (response) => { return response.json(); })
            .then(users => { this.setState({ robotsState: users }) });
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {

        
        const filteredRobots = this.state.robotsState.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })

        if (this.state.robotsState.length === 0) {
            return <h1> Loading...</h1>
        } else {
            return (
                <div>
                    <div className="tc">
                        <h1 className="f1">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </div>
                </div>
            )
        }
    }

}

export default App;

// import React from "react";
// import { robots } from './robots';
// import CardList from "./CardList";
// import SearchBox from './SearchBox';
// import './App.css';

// class App extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.cypress.io/users')
//             .then(
//                 response => {
//                     response.json();
//                 })
//             .then(users => {
//                 // this.setState({robots: users})
//                 this.setState({ robots: robots })

//             });


//     }

//     onSearchChange = (event) => {
//         this.setState({ searchfield: event.target.value });
//     }

//     render() {

//         const filteredRobots = this.state.robots.filter(robots => {
//             return this.state.robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
//         })

//         if (this.state.robots.length === 0) {
//             return <h1> Loading ...</h1>
//         } else {
//             return (
//                 <div className="tc">
//                     <h1 className="f1">RoboFriends</h1>
//                     <SearchBox searchChange={this.onSearchChange} />
//                     <CardList robots={filteredRobots} />
//                 </div>
//             );
//         }
//     }
// }


// export default App;