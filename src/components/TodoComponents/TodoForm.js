import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newItem: ''
    };
  }

  handleChanges = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.newItem);
    this.setState({ newItem: '' });
  };

  render() {
    console.log('putting on pants...');
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newItem"
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <button>New Task</button>
      </form>
    );
  }
}

export default TodoForm;