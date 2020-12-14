export const ADD_TASK = 'ADD_TASK'
export const COMPLETED_CHANGE = 'COMPLETED_CHANGE'
export const THEME_CHANGE = 'THEME_CHANGE'

export const handleAddTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}
export const handleCompletedChange = (newCompletedTask) => ({
    type: COMPLETED_CHANGE,
    payload: newCompletedTask
})
export const handleThemeChange = (theme) => ({
    type: THEME_CHANGE,
    payload: theme
})