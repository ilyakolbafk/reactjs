import React from 'react'
import {AddTask} from '../AddTask/AddTask'
import {Units} from '../RenderTasks/Units'

function AddTasks(match) {
    return (
        <div>
            <AddTask projectID={match.match.params.projectID}/>
            <Units projectID={match.match.params.projectID}/>
        </div>
    )
}

export default AddTasks;