import React, {Component} from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

const chores = [
    {
        name: 'Dishes',
        id: 167,
        completed: false
    },
    {
        name: 'Wash Clothes',
        id: 438934,
        completed: false
    },
    {
        name: 'Clean Room',
        id: 7843,
        completed: false
    },
    {
        name: 'Take out trash',
        id: 934978,
        completed: false
    },
]

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
        choreList: chores
    };
}

toggleItem = clickedId => {

    const newChoreList = this.state.choreList.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    this.setState({
      choreList: newChoreList
    });
  };

  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      choreList: [...this.state.choreList, newItem]
    });
  };
  render() {
    console.log("WAIT, I'm not dressed...");
    return (
        <div className='App'>

            <div className="header">
                <h1>Welcome to your To-Do App!</h1>
                <TodoForm addNewItem={this.addNewItem} />          
            </div>

            <TodoList
            chores={this.state.choreList}
            toggleItem={this.toggleItem}
            />

        </div>
    );
  }
}

export default App;
