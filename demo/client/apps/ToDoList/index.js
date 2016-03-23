import React, { Component } from 'react';
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './configureStore';
import reducers from './reducers'

const store = configureStore();

/**
 * 在入口文件中，我们把App和redux建立起联系。Provider是react-redux提供的组件，它的作用是把store和视图绑定在了一起，
 * 这里的Store就是那个唯一的State树。当Store发生改变的时候，整个App就可以作出对应的变化。
 */
class Index extends Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    );
  }
}

export default Index;