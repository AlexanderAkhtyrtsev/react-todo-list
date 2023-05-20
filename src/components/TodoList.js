import TaskInput from './TaskInput';
import * as M from '@mui/material'
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux';

export default function TodoList() {
    const tasks = useSelector((state) => state.tasks)
    return (
        <M.Container maxWidth="sm">
            <h1>To do</h1>

            <M.List>
                { tasks.length ? tasks.map(task => <TodoItem key={task.id} task={task} />) : 'No tasks yet' }
            </M.List>

            <TaskInput />
        </M.Container>
    )
}