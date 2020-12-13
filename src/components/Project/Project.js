import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ProjectComponent = ({project}) => {
    return (
        <div>
            <h2>
                <Link to={`/projects/${project.id}`}>
                    {project.name}
                </Link>
            </h2>
        </div>
    );
}

export const Project = connect(null, null)(ProjectComponent);