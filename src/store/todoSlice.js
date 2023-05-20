import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask(state, action) {
            state.tasks.push({
                id: +new Date(),
                title: action.payload,
                completed: false,
            })
        },
        removeTask(state, {payload: id}) {
            console.log(id)
            state.tasks = state.tasks.filter( t => +t.id !== +id )
        },
        toggleTask(state, {payload: id}) {
            const task = state.tasks.find(t => +t.id === +id);
            if (task) {
                task.completed = !task.completed;
            }
        },
    }
})


export const { addTask, removeTask, toggleTask } = todoSlice.actions;

export default todoSlice;