import React from 'react'
import styles from './Unit.scss'
import classnames from 'classnames/bind'
import {connect} from "react-redux";
import {handleCompletedChange} from "../../actions/actions"

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
    dispatchOnCompletedChange: (newCompleted) => dispatch(handleCompletedChange(newCompleted))
})

const UnitComponent = ({
                           task,
                           theme,
                           dispatchOnCompletedChange,
                       }) => {
    const onCompletedChange = (e) => {
        e.preventDefault()
        dispatchOnCompletedChange({
            id: task.id,
            name: task.name,
            description: task.description,
            completed: !task.completed,
            message: task.completed ? "Complete this task" : "Incomplete this task"
        })

    }
    return (
        <div className={cx("task", {[`task-theme-${theme}`]: true})}>
            <p className={cx("p", {[`p-theme-${theme}`]: true})}>
                Name: {task.name}</p>
            <p className={cx("p", {[`p-theme-${theme}`]: true})}>
                Description: {task.description}</p>
            <p className={cx("p", {[`p-theme-${theme}`]: true})}>
                Completed: {task.completed.toString()}</p>
            <button className={cx("big-button", {[`big-button-theme-${theme}`]: true})}
                    onClick={onCompletedChange}>{task.message}</button>
        </div>
    );
}

export const Unit = connect(null, mapDispatchToProps)(UnitComponent);