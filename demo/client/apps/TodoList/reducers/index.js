/**
 * Redux����ֻ��һ��State״̬����Ϊ�˱������״̬�����Խ��Խ���ӣ�
 * Reduxͨ�� Reducers�������������Ӧ�õ�State������Reducers���Ա��ֳ�һ����Reducer��
 */
import { combineReducers } from 'redux';

/**
 * ����Ӧ�ñ�ø��ӣ���Ҫ�� reducer ���� ���в�֣���ֺ��ÿһ������������ state ��һ���֡�
 */
import todoList from './todoList'
import filter from './filter'

/**
 * �� combineReducers ���������������ͬ��reducer������Ϊvalue��object��
 * �ϲ���һ�����յ� reducer �������ڱ�createStore�����״̬������FLUX��ͳ�����ϵ�Store��
 *
 * ���պϲ����״̬�����ṹ����
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

// state ����Ľṹ�ɴ���Ķ�� reducer �� key ������
// ͨ��Ϊ�������� reducer ������ͬ������ state key ��������
// ���磬����Ե��� combineReducers({ todos: myTodosReducer, counter: myCounterReducer }) �� state �ṹ��Ϊ { todos, counter }��

//export default function todoApp(state = {}, action) {
//  return {
//    filter: filter(state.filter, action),
//    todoList: todoList(state.todoList, action)
//  };
//}