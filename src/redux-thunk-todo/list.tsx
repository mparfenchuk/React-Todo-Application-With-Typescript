import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';

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

import { Actions, Todo } from '../app/types';
import { AppState } from './store';
import { fetchToggleTodo, fetchRemoveTodo } from './thunk';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        activeTodo: {
            textDecoration: 'line-through'
        }
    }),
);

const List = () => {
    const classes = useStyles()
    const dispatchThunk = useDispatch<ThunkDispatch<AppState, null, Actions>>()
    const todos = useSelector<AppState, Array<Todo>>((state: AppState) => state.todos)

    return(
        <MaterialUIList disablePadding>
            {todos.map(todo => {
                return (
                    <ListItem 
                        key={todo.id} 
                        dense
                        button
                        onClick={() => dispatchThunk(fetchToggleTodo(todo.id))}
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
                                onClick={() => dispatchThunk(fetchRemoveTodo(todo.id))}
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