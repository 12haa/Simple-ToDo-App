import React, {useEffect, useState} from 'react'
import Task from "./Task.jsx";
import TaskForm from "./TaskForm.jsx";
import './App.css'

const App = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {

        if (tasks.length === 0) return;
        localStorage.setItem('tasks', JSON.stringify(tasks))


    }, [tasks]);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        setTasks((tasks || []));
        return () => {

        }
    }, []);

    function addTask(name) {
        setTasks(prev => {
            return [...prev, {name: name, done: false}]
        })
    }




    function  removeTask(indexToRemove) {
            setTasks(prev => {
                return prev.filter((taskObject , index) =>
                     index !== indexToRemove

                )
            })

    }

    function updateTaskDone(taskIndex, newDone) {
        setTasks(prev => {
            const newTasks = [...prev];
            newTasks[taskIndex].done = newDone
            return newTasks;
        })

    }
    const numberCompleted = tasks.filter(task => task.done).length;
    const numberTotal = tasks.length;

    function getMessage() {
        const percentage = numberCompleted / numberTotal * 100;
        if (percentage === 0) return "Try To Do At Least One Task 🙏"; else if (percentage > 0 && percentage < 100) return `Good Joo Keep It Going 💪`; else if (percentage === 100) return `Great Job For Today 🎉`;
    }

    function renameTask (index, newName)  {
        setTasks(
            prev=>{
                const newTasks = [...prev];
                newTasks[index].name = newName;
                return newTasks;
            }
        )


    }


    const message = "test"
    return <main>
        <h1>{numberCompleted}/{numberTotal} Complete</h1>
        <h1>{getMessage()}</h1>
        <Task onAdd={addTask}/>
        {tasks.map((task, index) => (
            <TaskForm {...task}
                onRename={newName =>renameTask(index, newName)}
                onDelete={()=>removeTask(index)}

                 onToggle={done => updateTaskDone(index, done)} />))}


    </main>
}
export default App
