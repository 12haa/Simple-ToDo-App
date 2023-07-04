import React, {useState} from 'react'

const Task = ({onAdd}) => {
    const [taskName, setTaskName] = useState('');

    function handlesSubmit(e) {
        e.preventDefault();
        onAdd(taskName)
        setTaskName("")
    }

    return (<div>
            <form onSubmit={handlesSubmit}>
                <button>+</button>
                <input type="text" placeholder="Add Your New Task" value={taskName}
                       onChange={event => setTaskName(event.target.value)}/>

            </form>


        </div>)
}
export default Task
