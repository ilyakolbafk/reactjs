import React from 'react'
import Unit from './RenderTasks/Unit'
import AddTask from './AddTask/AddTask'

class ToDoList extends React.Component {
    state = {
        tasks: [
            {
                id: 1,
                name: 'Breakfast',
                description: 'Сook pancakes',
                completed: true,
                message: "Incomplete this task"
            },
            {
                id: 2,
                name: 'Planning meeting',
                description: 'Prepare material for the planning meeting',
                completed: false,
                message: "Complete this task"
            },
            {
                id: 3,
                name: 'English',
                description: 'Go to English classes',
                completed: true,
                message: "Incomplete this task"
            },
            {
                id: 4,
                name: 'Rabbit',
                description: 'Buy dry food for rabbit',
                completed: true,
                message: "Incomplete this task"
            },
            {
                id: 5,
                name: 'Cinema',
                description: 'Finally go to Tenet',
                completed: false,
                message: "Complete this task"
            },
            {
                id: 6,
                name: 'Article',
                description: 'Write an article about the holiday in English',
                completed: true,
                message: "Incomplete this task"
            },
            {
                id: 7,
                name: 'Car service',
                description: 'Go to the car service',
                completed: false,
                message: "Complete this task"
            },
            {
                id: 8,
                name: 'Relax',
                description: 'Swing in a hammock',
                completed: false,
                message: "Complete this task"
            }
        ]
    }
    addTask = task => {
        const updatedTasks = [task, ...this.state.tasks]
        this.setState({
            tasks: updatedTasks
        })
    }
    changeCompleteStatus = id => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed,
                        message: task.message === "Complete this task" ? "Incomplete this task" : "Complete this task"
                    }
                } else {
                    return task
                }
            }),
        })
    }

    render() {
        return (
            <main>
                <h1>To do list</h1>
                <div className="add-task">
                    <AddTask onSubmit={this.addTask}/>
                </div>
                {this.state.tasks.map(task => (
                    <Unit
                        key={task.id}
                        changeCompleteStatus={() => this.changeCompleteStatus(task.id)}
                        task={task}
                    />))}
            </main>
        )
    }
}

export default ToDoList