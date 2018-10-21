import React, {Component, Fragment} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField/TextField";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    FormControl: {
        width: 500
    }
});

export default withStyles(styles) (class extends Component {
    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        }
    };

    handleToogle = () => {
        this.setState({
            open: !this.state.open,
        })
    };

    handleChange = name => ({target: {value}}) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }
        })
    };

    handleSubmit = () => {
        // TODO: validate
        const {exercise} = this.state;
        this.props.onCreate({
            ...exercise,
            id: exercise.title.toLowerCase().replace(/ /g, '-')
        });
        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        })
    };

    render() {
        const {open, exercise: {title, description, muscles}} = this.state,
            { classes, muscles: categories} = this.props;
        return <Fragment>
            <Button
                variant="fab"
                aria-label="Add"
                mini
                onClick={this.handleToogle}>
                <AddIcon/>
            </Button>
            <Dialog
                open={open}
                onClose={this.handleToogle}
            >
                <DialogTitle id="form-dialog-title">
                    Create new exersice
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>
                    <form>
                        <TextField
                            label="Title"
                            value={title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                            className={classes.FormControl}
                        />
                        <br/>
                        <FormControl
                            className={classes.FormControl}
                        >
                            <InputLabel htmlFor="muscles">
                                Muscles
                            </InputLabel>
                            <Select
                                value={muscles}
                                onChange={this.handleChange('muscles')}
                            >
                                {
                                    categories.map(category =>
                                        <MenuItem
                                            key={category}
                                            value={category}>
                                            {category}
                                        </MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                        <br/>
                        <TextField
                            label="Description"
                            value={description}
                            multiline
                            rows="4"
                            className={classes.FormControl}
                            onChange={this.handleChange('description')}
                            margin="normal"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="primary"
                            variant="raised"
                    onClick={this.handleSubmit}>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    }
})