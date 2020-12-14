export const ADD_TASK = 'ADD_TASK'
export const COMPLETED_CHANGE = 'COMPLETED_CHANGE'
export const THEME_CHANGE = 'THEME_CHANGE'
export const ADD_PROJECT = 'ADD_PROJECT'

export const handleAddTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}
export const handleCompletedChange = (newCompletedTask, projectID) => ({
    type: COMPLETED_CHANGE,
    projectID: projectID,
    task: newCompletedTask
})
export const handleThemeChange = (theme) => ({
    type: THEME_CHANGE,
    payload: theme
})

export const handleAddProject = (project) => {
    return {
        type: ADD_PROJECT,
        payload: project
    }
}