import './App.css';
import './components/TodoList';
import TodoList from './components/TodoList';
import {Container} from '@mui/material';

function App() {
    return (
        <Container>
            <TodoList/>
        </Container>
    );
}

export default App;
