import React from 'react';
import {ToDoList} from './components/ToDoList.js'
import {Provider} from "react-redux"
import {createStore} from 'redux'
import {rootReducer} from './reducers/reducers'
import {BrowserRouter} from "react-router-dom";


const store = createStore(rootReducer)

class MyTodoList extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <ToDoList/>
                </Provider>
            </BrowserRouter>
        )
    }
}

export default MyTodoList;
