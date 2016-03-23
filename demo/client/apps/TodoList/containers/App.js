import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import AppController from '../components/AppController'
import CONST_FILTER from '../constants/constFilter'

// 将state绑定到props上
function mapStateToProps(state) {
  return {
    todoList: state.todoList,
    filter: state.filter
  }
}

// 将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(AppController)