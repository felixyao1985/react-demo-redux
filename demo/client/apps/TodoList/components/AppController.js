import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'
import CONST_FILTER from '../constants/constFilter'

class AppController extends Component {

  selectTodoList(todoList, filter) {
    console.log(todoList);
    switch (filter) {
      case CONST_FILTER.SHOW_ALL:
        return todoList;
      case CONST_FILTER.SHOW_COMPLETED:
        return todoList.filter(todo => todo.completed);
      case CONST_FILTER.SHOW_ACTIVE:
        return todoList.filter(todo => !todo.completed);
    }
  }

  render() {
    const { actions, filter, todoList } = this.props;

    return (
      <div>
        <AddTodo onAddClick={ actions.addTodo }/>
        <TodoList todoList={ this.selectTodoList(todoList, filter) } onTodoClick={ actions.completeTodo }/>
        <Footer filter={ filter } onFilterChange={ actions.setFilter } />
      </div>
    )
  }
}

AppController.propTypes = {
  actions: PropTypes.object.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  filter: PropTypes.oneOf([
    CONST_FILTER.SHOW_ALL,
    CONST_FILTER.SHOW_COMPLETED,
    CONST_FILTER.SHOW_ACTIVE
  ]).isRequired
};

export default AppController;