import React from 'react'
import {Paper, Tabs ,Tab, withWidth} from "@material-ui/core";

export default withWidth()(
	({muscles, category, onSelect, width}) => {
		const index = category
			? muscles.findIndex(group => group === category) + 1
			: 0;

		const onIndexSelected = (e, index) => {
			onSelect(index === 0 ? '' : muscles[index - 1])
		};

		return <Paper>
			<Tabs
				value={index}
				indicatorColor="primary"
				textColor="primary"
				onChange={onIndexSelected}
				centered={width !== 'xs'}
				scrollable={width === 'xs'}
			>
				<Tab label="All"/>
				{muscles.map(groupName =>
					<Tab label={groupName} key={groupName}/>
				)}
			</Tabs>
		</Paper>
	}
)

