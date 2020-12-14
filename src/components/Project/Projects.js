import React from 'react'
import {connect} from 'react-redux'
import {Project} from './Project'
import {AddProject} from '../AddProject/AddProject'

const mapStateToProps = (state) => ({
    projects: state.project.projects
})

const ProjectsComponent = ({projects}) => {
    return (
        <div>
            <AddProject/>
            <h1>Current projects are: </h1>
            {projects.map(project => (
                <Project
                    project={project}
                />
            ))}
        </div>
    )
}

export const Projects = connect(mapStateToProps, null)(ProjectsComponent)