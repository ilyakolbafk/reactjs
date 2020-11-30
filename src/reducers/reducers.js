import {combineReducers} from "redux";
import {ADD_TASK, COMPLETED_CHANGE, THEME_CHANGE} from "../actions/actions"

const initialState = {
    tasks: [],
    theme: "light"
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                tasks: [...state.tasks, action.payload] // payload is a change
            }
        }
        case COMPLETED_CHANGE: {
            let newTasks = [...state.tasks]
            newTasks[action.payload.id] = action.payload
            return {
                tasks: newTasks
            }
        }
        default:
            return state
    }
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_CHANGE: {
            return {
                theme: action.payload
            }
        }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    task: taskReducer,
    theme: themeReducer
})