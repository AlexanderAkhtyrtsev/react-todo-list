import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useEffect, useState} from 'react';
import {ListItemIcon, Checkbox, IconButton, ListItem, ListItemText, Menu, MenuItem} from '@mui/material';
import {useDispatch} from 'react-redux';
import {removeTask, toggleTask} from '../store/todoSlice';

export default function TodoItem({task}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleMenu = (e) => {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
    }

    const toggleTaskResolved = () => {
        if (open) {
            setOpen(false)
            setAnchorEl(null);
            return;
        }

        dispatch(toggleTask(task.id))
    }

    useEffect(() => {
        setOpen(!!anchorEl)
    }, [anchorEl])

    const handleDelete = () => {
        setAnchorEl(null);
        dispatch(removeTask(task.id))
    }

    return (
        <ListItem onClick={toggleTaskResolved}
                  secondaryAction={
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
                    checked={task.completed}
                />
            </ListItemIcon>

            <ListItemText primary={task.completed ? <s>{task.title}</s> : task.title}/>
        </ListItem>
    )
}