/**
 * Action向store派发指令，action函数会返回一个带有 type 属性的 Javascript Plain Object，
 * store将会根据不同的action.type来执行相应的方法。
 *
 * 注意：action中的函数，仅对状态树做更改，如果component中有对显示做更改的，不需要在此处定义，应该在控制的component中编写。
 */
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, SET_FILTER } from '../constants/actionType';

/**
 * addTodo函数的异步操作通过使用redux-thunk中间件去改变dispatch.
 * dispatch是在View层中用bindActionCreators绑定的,使用这个改变的dispatch我们可以向store发送异步的指令。
 * 比如说，可以在action中放入向服务端的请求(ajax),此处使用setTimeout模拟异步
 */
export function addTodo(text) {
  return dispatch => {
    setTimeout(() => dispatch(
      { type: ADD_TODO, text }
    ), 3000)
  }
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter };
}
