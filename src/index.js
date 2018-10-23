import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider} from "@material-ui/core/es/styles/index";
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import {amber, red} from "@material-ui/core/es/colors/index";

const theme = createMuiTheme({
	palette: {
		primary: red,
		secondary: {
			main: amber.A400,
			light: amber[200],
			dark: amber[700]
		},
		type: 'dark'
	},
	spacing: {
		unit: 10
	}
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App/>
	</MuiThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
