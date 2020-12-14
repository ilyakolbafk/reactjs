import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const NavigationComponent = () => {
    return (
        <nav>
            <Link to='/projects'>
                Your projects
            </Link>
        </nav>
    )
}

export const Navigation = connect(null, null)(NavigationComponent);