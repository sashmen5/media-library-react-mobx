import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Form from "./Form";


const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
};
export default ({
                    exercises,
                    exercise,
                    category,
                    onSelect,
                    onEdit,
                    muscles,
                    editMode,
                    exercise: {
                        id,
                        title = 'Welcome',
                        description = 'Please select exercise from list on the left'
                    },
                    onDelete,
                    onSelectEdit
                }) =>
    <Grid container spacing={16}>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    !category || category === group
                        ? <Fragment key={group}>
                            <Typography
                                variant="headline"
                                style={{textTransform: 'capitalize'}}
                            >
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map(({id, title}) =>
                                    <ListItem
                                        button
                                        key={id}
                                        onClick={() => onSelect(id)}>
                                        <ListItemText primary={title}/>
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                onClick={() => onSelectEdit(id)}>
                                                <Edit/>
                                            </IconButton>
                                            <IconButton
                                                onClick={() => onDelete(id)}>
                                                <Delete/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {editMode
                    ? <Form
                        onSubmit={onEdit}
                        exercise={exercise}
                        muscles={muscles}/>
                    : <Fragment>
                        <Typography variant="display1">
                            {title}
                        </Typography>
                        <Typography
                            variant="subheading"
                            style={{marginTop: 20}}
                        >
                            {description}
                        </Typography>
                    </Fragment>}

            </Paper>
        </Grid>
    </Grid>