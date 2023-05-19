import {Button, Grid, TextField} from '@mui/material';


export default function TaskInput () {
    return (
        <Grid container spacing={1}>
            <Grid xs={10} item>
                <TextField size="small" label="Your task" fullWidth variant="outlined" />
            </Grid>
            <Grid xs={2} item style={{ display: "flex" }}>
                <Button ml="auto" variant="outlined" fullWidth>Add</Button>
            </Grid>
        </Grid>
    )
}