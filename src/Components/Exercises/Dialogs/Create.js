import React, {Component, Fragment} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Form from "../Form";

export default class extends Component {
    state = {
        open: false
    };

    handleToogle = () => {
        this.setState({
            open: !this.state.open,
        })
    };

    handleFromSubmit = exercise => {
        this.handleToogle();

        this.props.onCreate(exercise);
    };


    render() {
        const {open} = this.state;
        const {muscles} = this.props;
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
								fullWidth
								maxWidth='sm'
            >
                <DialogTitle>
                    Create new exersice
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>
                    <Form
                        muscles={muscles}
                        onSubmit={this.handleFromSubmit}
                    />
                </DialogContent>
            </Dialog>
        </Fragment>
    }
}