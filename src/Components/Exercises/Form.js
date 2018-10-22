import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Button from "@material-ui/core/Button";

export default class extends Component {
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
            [name]: value
        })
    };

    handleSubmit = () => {
        // TODO: validate
        this.props.onSubmit({
            id: this.state.title.toLowerCase().replace(/ /g, '-'),
            ...this.state.exercise
        });
    };


    render() {
        const {title, description, muscles} = this.state;
        const { muscles: categories, exercise} = this.props;
        return <form>
            <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
								fullWidth
            />
            <br/>
            <FormControl fullWidth>
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
                onChange={this.handleChange('description')}
                margin="normal"
								fullWidth
            />
            <br/>
            <Button color="primary"
                    variant="contained"
										disabled={!title || !muscles}
                    onClick={this.handleSubmit}>
                {exercise ? 'Edit' : 'Create'}
            </Button>
        </form>
    }
}