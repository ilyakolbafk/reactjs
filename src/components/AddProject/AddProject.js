import React, {useState} from 'react';
import {handleAddProject} from "../../actions/actions";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    projects: state.project.projects
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnAddProject: (projectInfo) => dispatch(handleAddProject(projectInfo))
});

const AddProjectComponent = ({projects, dispatchOnAddProject}) => {
    const [project, setProject] = useState({
        id: 0,
        name: '',
        tasks: []
    })

    const onNameChange = (e) => {
        e.persist()
        setProject(previousProject => ({
            ...previousProject,
            name: e.target.value
        }))
    }

    const onSubmit = () => {
        setProject(previousProject => ({
            ...previousProject,
            id: projects.length + 1,
            tasks: [...previousProject.tasks]
        }))
        dispatchOnAddProject(project)
    }

    return (
        <div>
            <h1> Add project </h1>
            <input
                name="name"
                value={project.name}
                onChange={onNameChange}
                placeholder="Type project name"
            />
            <button onClick={onSubmit}>Add Project</button>
        </div>
    )
}


export const AddProject = connect(mapStateToProps, mapDispatchToProps)(AddProjectComponent)