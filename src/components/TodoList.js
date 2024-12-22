import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Box, TextField, Button } from "@mui/material";

function TodoList({ tasks, addTask, toggleTaskCompletion, deleteTask, editTask }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  // Handle Enter key press to add task
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ margin: "20px 0" }}>
        <TextField
          label="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}  // Added event handler for Enter key
          sx={{ width: "300px" }}
        />
        <Button
          onClick={handleAddTask}
          variant="contained"
          color="primary"
          sx={{ marginLeft: "10px" }}
        >
          Add
        </Button>
      </Box>
      <Box>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </Box>
    </Box>
  );
}

export default TodoList;
