import React from 'react'

const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'/>
            </div>
            <div className='form-control'>
                <label> Day and Time</label>
                <input type='text' placeholder='Add date and time'/>
            </div>
            <div className='form-control from-control-check'>
                <label> Set Reminder </label>
                <input type='checkbox' />
            </div>
            <input type='submit'value='Save Task' className='btn btn-block'/>
            
        </form>
    )
}

export default AddTask
