import {combineReducers} from "redux";
import {ADD_TASK, COMPLETED_CHANGE, THEME_CHANGE, ADD_PROJECT} from "../actions/actions"

const initialState = {
    tasks: [],
    theme: "light",
    projects: []
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                tasks: [...state.tasks, action.payload]
            }
        }
        case COMPLETED_CHANGE: {
            let newTasks = [...state.tasks]
            newTasks[action.task.id] = action.task
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

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT: {
            return {
                projects: [...state.projects, action.payload]
            }
        }
        case COMPLETED_CHANGE: {
            let newTasks = [...state.projects[action.projectID].tasks]
            newTasks[action.task.id] = action.task
            let newProjects = [...state.projects]
            return {
                projects: newProjects
            }
        }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    task: taskReducer,
    theme: themeReducer,
    project: projectReducer
})