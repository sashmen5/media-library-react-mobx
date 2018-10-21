import React, {Component, Fragment} from 'react';
import './App.css';
import {Header, Footer} from './Layouts';
import Exercises from './Exercises';
import {exercises, muscles} from "../store";

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
        this.setState(({exercises}) => ({
            exercises: exercises.filter(ex => ex.id !== id),
            editMode: false,
            exercise: {}
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

    render() {
        const exercises = this.getExercisesByMuscles(),
            {category, exercise, editMode} = this.state;

        return (
            <Fragment>
                <Header
                    onExerciseCreate={this.handleExerciseCreate}
                    muscles={muscles}/>

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
        );
    }
}

export default App;
