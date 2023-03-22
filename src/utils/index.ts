export const createConstants = function (...constants: any): any {
    return constants.reduce((acc: any, constant: any) => {
        acc[constant] = constant;
        return acc;
    }, {})
}

export const createReducer = function (initState: any, reducerMap: any): any {
    return (state = initState, action: any) => {
        const reducer = reducerMap[action.type];

        return state ? reducer(state, action.payload) : state;
    }
}