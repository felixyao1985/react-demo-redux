import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todoList.map((todo, index) =>
            <Todo {...todo}
              key={index}
              onClick={() => this.props.onTodoClick(index)} />
          )
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};

export default TodoList;