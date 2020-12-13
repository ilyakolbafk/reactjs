import React from "react";
import {connect} from 'react-redux'
import {Unit} from './Unit'
import {Redirect} from 'react-router-dom'

const mapStateToProps = (state) => ({
    projects: state.project.projects,
    theme: state.theme.theme
})


const UnitsComponent = ({projectID, theme, projects}) => {
    if (projects[projectID] === undefined) {
        return <Redirect to="/projects" />
    }
    let tasks = projects[projectID].tasks
    return (
        <div>
            {
                tasks.map(task => (
                    <Unit
                        key={task.id}
                        task={task}
                        theme={theme}
                        projectID = {projectID}
                    />
                ))
            }
        </div>
    )
}

export const Units = connect(mapStateToProps, null)(UnitsComponent)