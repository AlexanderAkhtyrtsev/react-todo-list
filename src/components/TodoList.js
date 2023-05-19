import TaskInput from './TaskInput';
import * as M from '@mui/material'
import TodoItem from './TodoItem';

export default function TodoList() {
    return (
        <M.Container>
            <h1>To do</h1>

            <M.List>
                <TodoItem title="Test2" />
            </M.List>

            <TaskInput />
        </M.Container>
    )
}