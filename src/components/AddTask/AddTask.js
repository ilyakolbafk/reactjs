import React, {useState} from "react"
import styles from '../AddTask/AddTask.scss'
import classnames from 'classnames/bind'
import {handleAddTask} from "../../actions/actions";
import {connect} from "react-redux";

const cx = classnames.bind(styles)
const mapStateToProps = (state) => ({
    projects: state.project.projects,
    theme: state.theme.theme,
    tasks: state.task.tasks
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnAddTask: (taskInfo) => dispatch(handleAddTask(taskInfo))
});

const AddTaskComponent = ({projects, theme, projectID}) => {
    const [task, setTask] = useState({
        id: 0,
        name: '',
        description: '',
        completed: false,
        message: "Complete this task"
    })

    const onNameChange = (e) => {
        e.persist()
        setTask(previousTask => ({
            ...previousTask,
            name: e.target.value
        }))
    }

    const onDescriptionChange = (e) => {
        e.persist()
        setTask(previousTask => ({
            ...previousTask,
            description: e.target.value
        }))
    }
    const onSubmit = () => {
        setTask(previousTask => ({
            ...previousTask,
            id: projects[projectID].tasks.length + 1,
            completed: false,
            message: "Complete this task"
        }))
        projects[projectID].tasks = [...projects[projectID].tasks, task]
    }
    return (
        <div className={cx("add-task", {[`add-task-theme-${theme}`]: true})}>
            <h1 className={cx("h1", {[`h1-theme-${theme}`]: true})}>To do list</h1>
            <div className={cx("form", {[`form-theme-${theme}`]: true})}>
                <input name="name"
                       className={cx("input", {[`input-theme-${theme}`]: true})}
                       value={task.name}
                       onChange={onNameChange}
                       placeholder="Type task name"
                />
                <input name="description"
                       className={cx("input", {[`input-theme-${theme}`]: true})}
                       value={task.description}
                       onChange={onDescriptionChange}
                       placeholder="Type task description"
                />
                <button className={cx("add-button", {[`add-button-theme-${theme}`]: true})}
                        onClick={onSubmit}>Add new task
                </button>
            </div>
        </div>
    )
}

export const AddTask = connect(mapStateToProps, mapDispatchToProps)(AddTaskComponent)