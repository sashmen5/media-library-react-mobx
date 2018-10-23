import React from 'react'
import {Paper, Tabs ,Tab, withWidth} from "@material-ui/core";
import {AppBar} from "@material-ui/core/es/index";

export default withWidth()(
	({muscles, category, onSelect, width}) => {
		const index = category
			? muscles.findIndex(group => group === category) + 1
			: 0;

		const onIndexSelected = (e, index) => {
			onSelect(index === 0 ? '' : muscles[index - 1])
		};

		return <AppBar position='static'>
			<Tabs
				value={index}
				indicatorColor="secondary"
				textColor="secondary"
				onChange={onIndexSelected}
				centered={width !== 'xs'}
				scrollable={width === 'xs'}
			>
				<Tab label="All"/>
				{muscles.map(groupName =>
					<Tab label={groupName} key={groupName}/>
				)}
			</Tabs>
		</AppBar>
	}
)

