import React, { useEffect } from 'react';
import { fetchTasks } from './state/effects';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="app-container">
            <h1 className="app-title">Список задач Effector</h1>
            <AddTaskForm />
            <TaskList />
        </div>
    );
}

export default App;
