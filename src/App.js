import { render } from '@testing-library/react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import React from 'react'
import NewTodo from './components/NewTodo';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, msg: "finish the application", done: false },
        { id: 2, msg: "todo application", done: true },
        { id: 3, msg: "integrate .net project for backend", done: true },
      ]
    }
    this.delete.bind(this)
    this.mark.bind(this)
  }

  addEntry = (msg) => {
    const ids = this.state.todos.map((item) => {
      return item.id
    });
    let id = Math.max(...ids) + 1;
    if (id<=0){
      id=1;
    }

    this.setState(prevState => {
      return { todos: [...prevState.todos, { id: id, msg: msg, done: false }] }
    })
  }

  mark = (id) => {
    let allTodos = this.state.todos.map(p => {
      if (p.id === id) {
        p.done = !p.done;
      }
      return p;
    });


    this.setState({ todos: allTodos })
  }

  delete = (id) => {
    // geht irgendwie nicht
    this.setState({todos: this.state.todos.filter(p=>  p.id !== id)})

    console.log(this.state.todos)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row mb-5">
            <NewTodo add={this.addEntry} />
          </div>
          <TodoList todos={this.state.todos} mark={this.mark} deleteHandler={this.delete} />
        </div>
      </div>
    );
  }
}

export default App;
