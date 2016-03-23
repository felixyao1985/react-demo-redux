http://cn.redux.js.org/index.html
http://www.jianshu.com/p/94c988cf11f3

## 三大原则
1. 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
2. 惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
3. 为了描述 action 如何改变 state tree ，你需要编写 reducers。

## 生态系统
1. http://cn.redux.js.org/docs/introduction/Ecosystem.html

## 设计流程
1. 先设计actionType与const
2. 根据actionType设计action
3. 再根据action设计各种reducer，并同时设计每个reducer用到的状态state
4. 使用combineReducers函数合并所有的reducer成为一个reducers，每个单独的reducer也会同时合并为一个大的state
5. 开始创建组件容器containers，并设计组件与触发action的方式

## combineReducers
需要重点研究