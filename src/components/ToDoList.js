import React from 'react'
import {Navigation} from './Navigation/Navigation'
import {Switcher} from './Switcher/Switcher'
import classnames from "classnames/bind";
import styles from "./ToDoList.scss";
import "./ToDoList.scss"
import {handleThemeChange} from "../actions/actions";
import {connect} from "react-redux"
import {Projects} from './Project/Projects'
import AddTasks from './Project/AddTasks'
import {Route, Switch, Redirect} from "react-router-dom";

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
            <Navigation/>
            <Switch>
                <Route exact path="/projects" component = {Projects} />
                <Route path="/projects/:projectID" component = {AddTasks} />
                <Redirect to="/" />
            </Switch>
        </main>

    )
}

export const ToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoListComponent)