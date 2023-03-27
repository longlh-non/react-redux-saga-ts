export const createConstants = function (constants: string[]): any {
    return constants.reduce((acc: any, constant: string) => {
        acc[constant] = constant;
        return acc;
    }, {})
}

export const createReducer = function (initState: any, reducerMap: any): any {
    return (state = initState, action: any) => {
        const reducer = reducerMap[action.type];
        
        return state ? (!state.length || !Object.keys(state).length ? state : reducer(state, action.payload)) : state;
    }
}

export const checkHttpStatus = function (response: any): any {
    if (response.status >= 200 && response.status < 300) return response
    const error = new Error(response.statusText)
    error.message = response.message
    throw error
}

export const parseJSON = function (response: any): any {
    return response.json()
}

export const createTodos = function (): any {
    
}

export const getTodos = function (): any {
    // fetch()
}

export const filterTodos = function (response: any): any {

}