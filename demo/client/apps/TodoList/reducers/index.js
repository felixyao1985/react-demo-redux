/**
 * Redux有且只有一个State状态树，为了避免这个状态树变得越来越复杂，
 * Redux通过 Reducers来负责管理整个应用的State树，而Reducers可以被分成一个个Reducer。
 */
import { combineReducers } from 'redux';

/**
 * 随着应用变得复杂，需要对 reducer 函数 进行拆分，拆分后的每一块独立负责管理 state 的一部分。
 */
import todoList from './todoList'
import filter from './filter'

/**
 * 用 combineReducers 辅助函数将多个不同的reducer函数作为value的object，
 * 合并成一个最终的 reducer 函数，在被createStore后，这个状态树就是FLUX传统意义上的Store了
 *
 * 最终合并后的状态树数结构如下
 * {
 *  "filter": "SHOW_ALL"
 *  "todoList":[
 *      {"text":"todoList text1", "completed":false},
 *      {"text":"todoList text2", "completed":true},
 *  ]
 * }
 */
export default combineReducers({
    filter,
    todoList
});

// state 对象的结构由传入的多个 reducer 的 key 决定。
// 通过为传入对象的 reducer 命名不同来控制 state key 的命名。
// 例如，你可以调用 combineReducers({ todos: myTodosReducer, counter: myCounterReducer }) 将 state 结构变为 { todos, counter }。

//export default function todoApp(state = {}, action) {
//  return {
//    filter: filter(state.filter, action),
//    todoList: todoList(state.todoList, action)
//  };
//}