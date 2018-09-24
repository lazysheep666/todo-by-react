import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import indexReducer from './reducers/index'
import ToDoApp from './components/ToDoApp.js'
import './styles/index.styl'

const store = createStore(indexReducer)

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp/>
  </Provider>,
  document.getElementById('app')
)
