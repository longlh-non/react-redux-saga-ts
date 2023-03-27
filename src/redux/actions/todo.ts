import { checkHttpStatus, parseJSON } from "../../utils";
import todo from "../../constants/modules/todo";

export const getTodoRequest = () => {
    return {
        type: todo.GET_TODOS_REQUEST
    }
}

export const getSucess = () => {
    return {
        type: todo.GET_TODOS_SUCCESS
    }
}

export const getFailed = (error: any) => {
    return {
        type: todo.GET_TODOS_FAIL,
        payload: {
            status: error.response.status,
            message: error.response.message
        }
    }
}

export const getTodos = function () {
    return function (dispatch: any) {
        dispatch(getTodoRequest());
        fetch("https://jsonplaceholder.typicode.com/todos", { method: "GET" })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(res => {
                try {
                    res.token = 'token';
                    dispatch(getSucess())
                } catch (err: any) {
                    dispatch(getFailed({ response: { status: 500, message: "Can not fetch data" } }))
                    console.error(err)
                }
            })
            .catch(err => {
                dispatch(getFailed(err))
                console.error(err)
            })
    }
}