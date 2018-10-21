import React, {Component, Fragment} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
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


    render() {
        const {open} = this.state;
        const {muscles, onCreate} = this.props;
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
                    <Form
                        muscles={muscles}
                        onSubmit={onCreate}
                    />
                </DialogContent>
            </Dialog>
        </Fragment>
    }
}