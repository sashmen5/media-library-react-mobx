import React from 'react';
import CreateDialog from '../Exercises/Dialogs/Create';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
export default ({muscles, onExerciseCreate}) =>
	<AppBar position="static">
		<Toolbar>
			<Typography
				variant="headline"
				style={{flex: 1}}
				color="inherit">
				Exercises Database
			</Typography>
			<CreateDialog
                muscles={muscles}
                onCreate={onExerciseCreate}
            />
		</Toolbar>
	</AppBar>