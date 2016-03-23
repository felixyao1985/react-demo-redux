/**
 * 以下为样板代码，业务层变更也几乎可以不改动代码
 * 仅当需要增加往store增加中间件的时候才需要修改代码
 */
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

/**
 * applyMiddleware 来自redux可以包装 store 的 dispatch
 * thunk 作用是使被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它
 */
let buildStore = compose(applyMiddleware(thunk))(createStore);

/**
 * 注册Store
 *
 * @param initialState
 * @returns {*}
 */
let configureStore = (initialState) => {
  const store = buildStore(rootReducer, initialState);
  // const store = createStore(rootReducer, initialState); //无中间件版本

  /**
   * 热替换选项
   */
  if(module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'))
    })
  }

  return store;
};

export default configureStore;
