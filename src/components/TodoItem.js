import React, { useState } from "react";
import { Box, TextField, IconButton, Checkbox } from "@mui/material";
import { Delete, Edit, Save } from "@mui/icons-material";

function TodoItem({ task, toggleTaskCompletion, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "400px",
        margin: "10px auto",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
      }}
    >
      <Checkbox
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      {isEditing ? (
        <TextField
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          sx={{ flex: 1, marginRight: "10px" }}
        />
      ) : (
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            flex: 1,
          }}
        >
          {task.text}
        </span>
      )}
      <IconButton
        onClick={isEditing ? handleEdit : () => setIsEditing(true)}
        color={isEditing ? "primary" : "default"}
      >
        {isEditing ? <Save /> : <Edit />}
      </IconButton>
      <IconButton onClick={() => deleteTask(task.id)} color="error">
        <Delete />
      </IconButton>
    </Box>
  );
}

export default TodoItem;
