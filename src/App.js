import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TaskFilter from "./components/TaskFilter";
import { Container, Typography, Box } from "@mui/material";
import "./styles/App.css";


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "completed"
      ? tasks.filter((task) => task.completed)
      : tasks.filter((task) => !task.completed);

  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h3">Abdallah's To-Do List</Typography>
        <Typography variant="h5">"The journey of a thousand miles begins with one step." — Lao Tzu</Typography>
      </Box>
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TodoList
        tasks={filteredTasks}
        addTask={addTask}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </Container>
  );
}

export default App;
