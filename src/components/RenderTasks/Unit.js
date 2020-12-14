import React from 'react'
import styles from './Unit.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles);
class Unit extends React.Component {
    render () {
        return (
            <div  className={cx("task", {[`task-theme-${this.props.theme}`]: true})}>
                <p className={cx("p", {[`p-theme-${this.props.theme}`]: true})}>
                    Name: {this.props.task.name}</p>
                <p className={cx("p", {[`p-theme-${this.props.theme}`]: true})}>
                    Description: {this.props.task.description}</p>
                <p className={cx("p", {[`p-theme-${this.props.theme}`]: true})}>
                    Completed: {this.props.task.completed.toString()}</p>
                <button className={cx("big-button", {[`big-button-theme-${this.props.theme}`]: true})}
                        onClick={this.props.changeCompleteStatus}>{this.props.task.message}</button>
            </div>
        )
    }

}
export default  Unit