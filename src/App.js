import React from 'react';
import './App.css';
import './styles.css'
class MyTodoList extends React.Component {
    state = {
        tasks: [
            {
                id: 1,
                name: 'Breakfast',
                description: 'Сook pancakes',
                completed: true
            },
            {
                id: 2,
                name: 'Planning meeting',
                description: 'Prepare material for the planning meeting',
                completed: false
            },
            {
                id: 3,
                name: 'English',
                description: 'Go to English classes',
                completed: true
            },
            {
                id: 4,
                name: 'Rabbit',
                description: 'Buy dry food for rabbit',
                completed: true
            },
            {
                id: 5,
                name: 'Cinema',
                description: 'Finally go to Tenet',
                completed: false
            },
            {
                id: 6,
                name: 'Article',
                description: 'Write an article about the holiday in English',
                completed: true
            },
            {
                id: 7,
                name: 'Car service',
                description: 'Go to the car service',
                completed: false
            },
            {
                id: 8,
                name: 'Relax',
                description: 'Swing in a hammock',
                completed: false
            }
        ]
    }
    render() {
        return (
            <main>
                <h1>To do list</h1>
                {this.state.tasks.map(task => (
                    <div key={task.id} className="task">
                    <p>Name: {task.name}</p>
                    <p>Description: {task.description}</p>
                    <p>Completed: {task.completed.toString()}</p>
                    <button className="big-button" onClick={() => {
                        console.log("Task "+task.id+" completed status = "+task.completed)
                    }}>Complete this task</button>
                </div>))}
            </main>
        )}
}

export default MyTodoList;
