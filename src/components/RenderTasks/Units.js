import React from "react";
import {connect} from 'react-redux'
import {Unit} from './Unit'

const mapStateToProps = (state) => ({
    tasks: state.task.tasks,
    theme: state.theme.theme
})


const UnitsComponent = ({tasks, theme}) => {
    return (
        <div>
            {
                tasks.map(task => (
                    <Unit
                        key={task.id}
                        task={task}
                        theme={theme}
                    />
                ))
            }
        </div>
    )
}

export const Units = connect(mapStateToProps, null)(UnitsComponent)