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
  changeBookState = newBookName => {
    this.setState({
      books: [
        { bookName: newBookName, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Memorphorsis", writer: "Paulo Coelho" }
      ]
    });
  }

  changeWithInputeState = event => {
    this.setState({
      books: [
        { bookName: event.tergat.value, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Memorphorsis", writer: "Paulo Coelho" }
      ]
    });
  }
  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    };
    console.log(this.state);
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={() => this.changeBookState("Nineteen Eighty-Four")}>Change State</button>
        <input type="text" onChange={this.changeWithInputeState} />
        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputeState} />
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer} />
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "Nineteen  84")} />
      </div>
    );
  }
}

export default App;