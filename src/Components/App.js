import React, {Component, Fragment} from 'react';
import './App.css';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {exercises, muscles} from "../store";

class App extends Component {
	state = {
		exercises,
		category: '',
		exercise: {}
	};

	getExercisesByMuscles() {
		return Object.entries(
			this.state.exercises.reduce((exercises, exercise) => {
				const {muscles} = exercise;
				exercises[muscles] = exercises[muscles]
					? [...exercises[muscles], exercise]
					: [exercise];
				return exercises;
			}, {})
		)
	}

	handleCategorySelected = category => {
		this.setState({category});
	};

	handleExerciseSelected = id => {
		debugger;
		this.setState(({ exercises }) => ({
			exercise: exercises.find(ex => ex.id === id)
		}))
	};

	render() {
		const exercises = this.getExercisesByMuscles(),
			{category, exercise} = this.state;

		return (
			<Fragment>
				<Header/>

				<Exercises
					exercises={exercises}
					exercise={exercise}
					category={category}
					onSelect={this.handleExerciseSelected}
				/>

				<Footer
					muscles={muscles}
					category={category}
					onSelect={this.handleCategorySelected}/>
			</Fragment>
		);
	}
}

export default App;
