import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';


//Class Component
class App extends Component {

  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>Book List</h1>
        <Book bookName="1998" writer="George oreewll" />
        <Book bookName="The vanchi man" writer="Den law" />
        <Book bookName="The alimal" writer="Paulo Coelho" />

      </div>
    );
  }
}
export default App;
