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

    const title = "IT-INCUBATOR"

    useEffect(() => {

        todoListApi.addTodo(title)
            .then((res) => {
            setState(res.data)
        })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)

    const todolistId = "634b0059-1eaf-437a-989b-63bc96dc2136"

    useEffect(() => {

       todoListApi.deleteTodo(todolistId)
           .then((res) => {
               setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)

    const todolistId = "212c1164-b59d-4109-a94a-60264d3a3ee1"

    useEffect(() => {

            todoListApi.updateTodo(todolistId, "What to do")
                .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}