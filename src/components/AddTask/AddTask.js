import React from "react"
import shortid from 'shortid'
import styles from './AddTask.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)
class AddTask extends React.Component {
    state = {
        name: '',
        description: ''
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleChangeDescription = event => {
        this.setState({
            description: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            description: this.state.description,
            completed: false,
            id: shortid.generate(),
            message: "Complete this task"
        })
        this.setState({
            name: '',
            description: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}
                  className={cx("form", {[`form-theme-${this.props.theme}`]: true})}>
                <input name="name"
                       className={cx("input", {[`input-theme-${this.props.theme}`]: true})}
                       value={this.state.name}
                       onChange={this.handleChange}
                       placeholder="Type task name"
                />
                <input name="description"
                       className={cx("input", {[`input-theme-${this.props.theme}`]: true})}
                       value={this.state.description}
                       onChange={this.handleChangeDescription}
                       placeholder="Type task description"
                />
                <button className={cx("add-button", {[`add-button-theme-${this.props.theme}`]: true})}
                        onClick={this.handleSubmit}>Add new task</button>
            </form>
        )
    }
}
export default AddTask