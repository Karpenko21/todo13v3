import axios from "axios";

const settings = {withCredentials: true}

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}


type ResponseType<D> = {
    resultCode: number
    messages: string[]
    data:D
}


export const todoListApi = {
    getTodo() {
        return  axios.get<TodolistType[]>("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
    },
    addTodo(title: string) {
        return axios.post<ResponseType<{item: TodolistType}>>("https://social-network.samuraijs.com/api/1.1/todo-lists", {title}, settings)
    },
    deleteTodo(todolistId: string) {
        return axios.delete<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
    },
    updateTodo(todolistId: string, title: string) {
        return axios.put<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, settings)
    }

}