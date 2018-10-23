import React from 'react';
import CreateDialog from '../Exercises/Dialogs/Create';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = {
	flex: {
		flex: 1
	}
};

export default withStyles(styles)(({ onExerciseCreate, classes}) =>
	<AppBar position="static">
		<Toolbar>
			<Typography
				className={classes.flex}
				variant="headline"
				color="inherit">
				Exercises Database
			</Typography>
			<CreateDialog/>
		</Toolbar>
	</AppBar>
)