import React, {Component} from 'react'
import { Tabs ,Tab, withWidth} from "@material-ui/core";
import {AppBar} from "@material-ui/core/es/index";
import {withContext} from "../../context";


class Footer extends Component {
	onIndexSelected = (e, index) => {
		const {onCategorySelect, muscles} = this.props;
		onCategorySelect(index === 0 ? '' : muscles[index - 1]);
	};

	getIndex = () => {
		const {category, muscles} = this.props;
		return category
			? muscles.findIndex(group => group === category) + 1
			: 0;
	};

	render() {
		const {width, muscles} = this.props;

		return (
			<AppBar position='static'>
				<Tabs
					value={this.getIndex()}
					indicatorColor="secondary"
					textColor="secondary"
					onChange={this.onIndexSelected}
					centered={width !== 'xs'}
					scrollable={width === 'xs'}
				>
					<Tab label="All"/>
					{muscles.map(groupName =>
						<Tab label={groupName} key={groupName}/>
					)}
				</Tabs>
			</AppBar>
		)
	}
}
export default withContext(withWidth()(Footer))

