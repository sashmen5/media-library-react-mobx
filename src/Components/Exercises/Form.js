import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    FormControl: {
        width: 500
    }
});

export default withStyles(styles)(class extends Component {
    state = this.getInitialState();

    getInitialState() {
        const {exercise} = this.props;

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }


    handleChange = name => ({target: {value}}) => {
        this.setState({
            exercise: {
                [name]: value
            }
        })
    };

    handleSubmit = () => {
        // TODO: validate
        const {exercise} = this.state;
        this.props.onSubmit({
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
        const {title, description, muscles} = this.state;
        const {classes, muscles: categories} = this.props;
        return <form>
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
            <br/>
            <Button color="primary"
                    variant="raised"
                    onClick={this.handleSubmit}>
                Create
            </Button>
        </form>
    }
})