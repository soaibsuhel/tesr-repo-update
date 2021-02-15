import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

class App extends Component {
  // State
  // 16.8 
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],
    otherProp: "I am some other Prop"
  }
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  render() {
    return (
      <div className="App">
        <h1>Book List</h1>
        <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[0].writer} />
        <Book bookName={this.state.books[2].bookName} writer={this.state.books[0].writer} />
      </div>
    );
  }
}

export default App;