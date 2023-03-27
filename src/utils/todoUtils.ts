import { ITodo } from '../interface/ITodo'

export function createTodos() {
    const todos = [];
    for (let i = 0; i < 50; i++) {
        todos.push({
            id: i,
            text: "Todo " + (i + 1),
            completed: Math.random() > 0.5
        });
    }
    return todos;
}

export function filterTodos(todos: ITodo[], tab: any) {
    if (!todos || !todos.length) return [];  
    console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.');
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }

    return todos.filter((todo: ITodo) => {
        if (tab === 'active') {
            return !todo.completed;
        }
        if (tab === 'completed') {
            return todo.completed;
        }
        return true;
    });
}