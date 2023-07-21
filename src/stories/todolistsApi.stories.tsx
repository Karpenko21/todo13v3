import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todoListApi} from "../api/todolist-api";

export default {
    title: 'API'
}



export const GetTodolists = () => {

    const [state, setState] = useState<any>(null)

    useEffect(() => {

        todoListApi.getTodo().then((res) => {
            setState(res.data)
        })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistTitle, setTodolistTitle] = useState<string>("")


    const addTodo = () => {

        todoListApi.addTodo(todolistTitle)
            .then((res) => {
                setState(res.data)
            })
        setTodolistTitle("")
    }

    return <div>
        <div>{JSON.stringify(state)}</div>
        <div>
            <input placeholder={"Todolist title"}
                   onChange={(e) => {setTodolistTitle(e.currentTarget.value)}}
                   value={todolistTitle}/>
            <button onClick={addTodo}>Create Todolist</button>
        </div>
    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")

    const deleteTodolist = () => {

        todoListApi.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data)
            })
        setTodolistId("")
    }

    return <div>
        <div>{JSON.stringify(state)}</div>
        <div>
            <input placeholder={"todolistId"}
                   onChange={(e) => {setTodolistId(e.currentTarget.value)}}
                   value={todolistId}/>
            <button onClick={deleteTodolist}>Delete Todolist</button>
        </div>
    </div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const [todolistTitle, setTodolistTitle] = useState<string>("")


    const changeTodolistTitle = () => {

        todoListApi.updateTodo(todolistId, todolistTitle)
            .then((res) => {
                setState(res.data)
            })
        setTodolistTitle("")
        setTodolistId("")
    }

    return <div>
        <div>{JSON.stringify(state)}</div>
        <div>
            <input placeholder={"todolistId"}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}
                   value={todolistId}/>
            <input placeholder={"New title"}
                   onChange={(e) => {
                       setTodolistTitle(e.currentTarget.value)
                   }}
                   value={todolistTitle}/>
            <button onClick={changeTodolistTitle}>Change Todolist Title</button>
        </div>
    </div>
}


export const GetTasks = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")


    const getTasks = () => {

        todoListApi.getTasks(todolistId).then((res) => {
            setState(res.data)
        })
        setTodolistId("")

    }
    return <div>
        <div>{JSON.stringify(state)}</div>
        <div>
            <input placeholder={"todolistId"}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}
                   value={todolistId}/>
            <button onClick={getTasks}>Get tasks</button>
        </div>
    </div>
}
export const CreateTask = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const [taskTitle, setTaskTitle] = useState<string>("")


    const addTask = () => {

        todoListApi.addTask(todolistId, taskTitle).then((res) => {
            setState(res.data)
        })
        setTodolistId("")
        setTaskTitle("")

    }
    return <div>
        <div>{JSON.stringify(state)}</div>
        <div>
            <input placeholder={"todolistId"}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}
                   value={todolistId}/>
            <input placeholder={"Task title"}
                   onChange={(e) => {
                       setTaskTitle(e.currentTarget.value)
                   }}
                   value={taskTitle}/>
            <button onClick={addTask}>Add task</button>
        </div>
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")

    const deleteTask = () => {
        todoListApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
        setTodolistId("")
        setTaskId("")
    }

    return <>
        <div>{JSON.stringify(state)}</div>
        <div>
            <input placeholder={"todolistId"}
                   onChange={(e) => {setTodolistId(e.currentTarget.value)}}
                   value={todolistId}/>
            <input placeholder={"taskId"}
                   onChange={(e) => {setTaskId(e.currentTarget.value)}}
                   value={taskId}/>
            <button onClick={deleteTask}>Delete task</button>
        </div>
    </>

}
export const UpdateTaskTitle = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")


    const model = {
        title: "gggg",
        /* description: "string",
         status: 1,
         priority: 1,
         startDate: "ff",
         deadline: ",mm"*/
    }

    const changeTaskTitle = () => {

        todoListApi.updateTaskTitle(todolistId, taskId, model)
            .then((res) => {
                setState(res.data)
            })
        setTaskId("")
        setTaskTitle("0")
        setTodolistId("")
    }

    return <div>
        <div>{JSON.stringify(state)}</div>
        <div>
            <input placeholder={"todolistId"}
                   onChange={(e) => {setTodolistId(e.currentTarget.value)}}
                   value={todolistId}/>
            <input placeholder={"taskId"}
                   onChange={(e) => {setTaskId(e.currentTarget.value)}}
                   value={taskId}/>
            <input placeholder={"Task title"}
                   onChange={(e) => {setTaskTitle(e.currentTarget.value)}}
                   value={taskTitle}/>
            <button onClick={changeTaskTitle}>Change Task Title</button>
        </div>
    </div>
}