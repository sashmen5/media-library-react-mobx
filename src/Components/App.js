import React, {Component, Fragment} from 'react';
import './App.css';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {exercises, muscles} from "../store";
import {CssBaseline} from "@material-ui/core/es/index";
import {Provider} from '../context';

class App extends Component {
	state = {
		exercises,
		category: '',
		exercise: {},
		editMode: false
	};

	getExercisesByMuscles() {
		const initExercises = muscles.reduce((exercises, category) => ({
			...exercises,
			[category]: []
		}), {});

		return Object.entries(
			this.state.exercises.reduce((exercises, exercise) => {
				const {muscles} = exercise;
				exercises[muscles] = [...exercises[muscles], exercise];
				return exercises;
			}, initExercises)
		)
	}

	handleCategorySelected = category => {
		this.setState({category});
	};

	handleExerciseSelected = id => {
		this.setState(({exercises}) => ({
			exercise: exercises.find(ex => ex.id === id),
			editMode: false
		}))
	};

	handleExerciseCreate = exercise => {
		this.setState(({exercises}) => ({
			exercises: [
				...exercises,
				exercise
			]
		}))
	};

	handleExerciseDelete = id => {
		this.setState(({exercises, exercise, editMode}) => ({
			exercises: exercises.filter(ex => ex.id !== id),
			editMode: exercise.id === id ? false : editMode,
			exercise: exercise.id === id ? {} : exercise
		}))
	};

	handleExerciseSelectEdit = id => {
		this.setState(({exercises}) => ({
			exercise: exercises.find(ex => ex.id === id),
			editMode: true
		}))
	};

	handleExerciseEdit = exercise => {
		this.setState(({exercises}) => ({
			exercises: [
				...exercises.filter(ex => ex.id !== exercise),
				exercise
			],
			exercise
		}))
	};

	getContext = () => ({
		muscles,
		...this.state,
		onCategorySelect: this.handleCategorySelected,
		onCreate: this.handleExerciseCreate
	});

	render() {
		const exercises = this.getExercisesByMuscles(),
			{category, exercise, editMode} = this.state;

		return (
			<Provider value={this.getContext()}>
				<Fragment>
					<CssBaseline/>
					<Header/>
					<Exercises
						exercises={exercises}
						exercise={exercise}
						category={category}
						editMode={editMode}
						muscles={muscles}
						onSelect={this.handleExerciseSelected}
						onDelete={this.handleExerciseDelete}
						onSelectEdit={this.handleExerciseSelectEdit}
						onEdit={this.handleExerciseEdit}
					/>

					<Footer
						muscles={muscles}
						category={category}
						onSelect={this.handleCategorySelected}/>
				</Fragment>
			</Provider>
		);
	}
}

export default App;
