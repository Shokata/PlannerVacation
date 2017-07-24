import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

document.addEventListener('DOMContentLoaded', function () {
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                filterText: '',
                likesKids: false,
            };
        }
        render() {
            return <div className="test">
                <SearchBar filterText={this.state.filterText} />
                <CatTable  likesKids={this.state.likesKids} kitties={this.props.kitties}/>
            </div>
        }
    }

    class SearchBar extends React.Component {
        handleNameChange = event => {
            this.setState({
                filterText: event.target.value,
            });
        };

        render() {
            return <form action="#">
                <input type="text"
                       placeholder="Search..."
                       onChange={this.handleNameChange}/>
                <p><input type="checkbox"/>Only show kitties that likes kids</p>
            </form>
        }
    }

    class CatTable extends React.Component {
        render() {
            let rows = []; //tworzymy pustą tablicę
            let lastCategory = null; //zmienna przechowująca ostatnią kategorię (płeć)
            this.props.kitties.forEach(function (kitty) {
                //dla każdego obiekty z props.kitties
                if (kitty.category !== lastCategory) { //jeśli pojawia się nowa kategoria (płeć kociaka)
                    //dodaj do tablicy rows komponent CatCategoryRow
                    rows.push(<CatCategoryRow category={kitty.category} key={kitty.category}/>);
                }
                //dodaj do tablicy rows komponent CatRow
                rows.push(<CatRow kitty={kitty} key={kitty.name}/>);
                lastCategory = kitty.category;
            });
            return <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        }
    }

    const kitties = [
        {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
        {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
        {category: "male", age: "2", likesKids: false, name: "Grumpy"},
        {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
        {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
        {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
    ];

    class CatCategoryRow extends React.Component {
        render() {
            return <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>;
        }
    }

    class CatRow extends React.Component {
        render() {
            let name = this.props.kitty.likesKids ?
                this.props.kitty.name : <span style={{color: 'red'}}> {this.props.kitty.name} </span>;
            return <tr>
                <td>{name}</td>
                <td>{this.props.kitty.age}</td>
            </tr>;
        }
    }


    ReactDOM.render(
        <App kitties={kitties}/>,
        document.getElementById('app')
    );
});
