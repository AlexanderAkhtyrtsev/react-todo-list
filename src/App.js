import './App.css';
import './components/TodoList';
import TodoList from './components/TodoList';
import {Container} from '@mui/material';

function App() {
    return (
        <Container maxWidth="sm">
            <TodoList/>
        </Container>
    );
}

export default App;
