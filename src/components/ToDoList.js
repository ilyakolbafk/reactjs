import React from 'react'
import {Units} from './RenderTasks/Units'
import {AddTask} from './AddTask/AddTask'
import {Switcher} from './Switcher/Switcher'
import classnames from "classnames/bind";
import styles from "./ToDoList.scss";
import "./ToDoList.scss"
import {handleThemeChange} from "../actions/actions";
import {connect} from "react-redux"

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme))
})
const ToDoListComponent = ({theme}) => {
    return (

        <main className={cx("main", {[`main-theme-${theme}`]: true})}>
            <Switcher/>
            <AddTask/>
            <Units/>
        </main>
    )
}

export const ToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoListComponent)