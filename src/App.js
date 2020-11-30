import React from 'react';
import {ToDoList} from './components/ToDoList.js'
import {Provider} from "react-redux"
import {createStore} from 'redux'
import {rootReducer} from './reducers/reducers'

const store = createStore(rootReducer)

class MyTodoList extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <ToDoList/>
            </Provider>
        )
    }
}

export default MyTodoList;
