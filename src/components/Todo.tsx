import React, { useMemo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterTodos } from '../utils/todoUtils'
import { todo } from '../constants'
import { ITodo } from '../interface/ITodo'

import "../styles/Todo.scss"


interface ITodos {
    tab: string,
    theme: string
}

export default function Todo(props: ITodos) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: todo.GET_TODOS })
    })
    // dispatch({type: todo.GET_TODOS});
    const todos = useSelector((state: any) => state.todos);

    // if not useMemo => filterTodos recalculation every re-render
    // useMemo cached the return value of filterTodos() => filterTodos re-calculation at re-render only if props.todos or props.tab is changed
    // if not put dependencies as second argument => recalculation every re-render
    const visibleTodos = useMemo(() => {
        return filterTodos(todos, props.tab)
    }, [todos, props.tab]);
    
    return (
        <div className={props.theme}>
            <ul>
                {
                    visibleTodos.map((todo: any, index: number) => {
                        return (
                            <li key={todo.id}>
                                {todo.completed ? <s>{todo.text}</s> : todo.text}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
