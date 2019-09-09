import React from 'react';

import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import MaterialUIList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { remove, toggle } from '../app/actions';

import { useTodoState, useTodoDispatch } from './store';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        activeTodo: {
            textDecoration: 'line-through'
        }
    }),
);

const List = () => {
    const classes = useStyles()
    const { todos } = useTodoState()
    const dispatch = useTodoDispatch()

    return (
        <MaterialUIList disablePadding>
            {todos.map(todo => {
                return (
                    <ListItem 
                        key={todo.id} 
                        dense
                        button
                        onClick={() => dispatch(toggle(todo.id))}
                    >
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={!todo.active}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText className={clsx(!todo.active && classes.activeTodo)}>
                            {todo.title}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton 
                                onClick={() => dispatch(remove(todo.id))}
                                edge="end"
                                color="primary"
                                size="small"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            })}
        </MaterialUIList>
    )
}

export default List;