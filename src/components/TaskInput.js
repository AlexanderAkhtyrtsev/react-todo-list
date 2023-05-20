import {Button, Grid, TextField} from '@mui/material';
import {useDispatch} from 'react-redux';
import {addTask} from '../store/todoSlice';
import {useEffect, useState} from 'react';

export default function TaskInput () {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [error, setError] = useState(false)

    // Resetting validation state
    useEffect(() => {
        value && setError(false)
    }, [ value ])

    const submit = () => {
        if (!value) {
            setError(true);
            return;
        }

        dispatch(addTask(value));
        setValue("")
    }


    return (
        <Grid container spacing={1}>
            <Grid xs={10} item>
                <TextField size="small"
                           label="Your task"
                           value={value}
                           onChange={e => setValue(e.target.value)}
                           fullWidth
                           variant="outlined"
                           error={error}
                />
            </Grid>
            <Grid xs={2} item style={{ display: "flex" }}>
                <Button ml="auto" variant="outlined" fullWidth onClick={submit}>Add</Button>
            </Grid>
        </Grid>
    )
}