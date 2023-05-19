import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from 'react';
import {ListItemIcon, Checkbox, IconButton, ListItem, ListItemText, Menu, MenuItem} from '@mui/material';

export default function TodoItem({title}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const toggleMenu = (e) => { setAnchorEl(e.currentTarget); }

    const handleDelete = () => {
        setAnchorEl(null)
    }

    return (
        <ListItem secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={toggleMenu}>
                <MoreVertIcon/>
            </IconButton>
        }>
            <Menu open={open}
                anchorEl={anchorEl}
            >
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>

            <ListItemIcon>
                <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>

            <ListItemText primary={title}/>
        </ListItem>
    )
}