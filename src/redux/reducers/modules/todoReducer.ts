import { createReducer } from './../../../utils/index';
import todo from '../../../constants/modules/todo';

interface ITodo {
    userID: number,
    id: number;
    title: string;
    completed: boolean;
}

const initialState: ITodo[] = [];

export default createReducer(initialState, {
    [todo.GET_TODOS]: (state: any, payload: any) => {
        return Object.assign([], state, []);
    }
})