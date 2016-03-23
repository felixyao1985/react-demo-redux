import keyMirror from 'fbjs/lib/keyMirror'

/**
 * 使用keyMirror工具生成类型常数的Key/Value对
 */
export default keyMirror({
  ADD_TODO: null,
  REMOVE_TODO: null,
  COMPLETE_TODO: null,
  SET_FILTER: null
})

// 等于
// export const ADD_TODO = 'ADD_TODO';
// export const REMOVE_TODO = 'REMOVE_TODO';
// export const COMPLETE_TODO = 'COMPLETE_TODO';
// export const SHOW_TODO = 'SHOW_TODO';
// export const SET_FILTER = 'SET_FILTER';