import React from "react";
import { Box, Button } from "@mui/material";

function TaskFilter({ filter, setFilter }) {
  return (
    <Box sx={{ textAlign: "center", margin: "20px 0" }}>
      <Button
        variant={filter === "all" ? "contained" : "outlined"}
        onClick={() => setFilter("all")}
        sx={{ margin: "0 10px" }}
      >
        All
      </Button>
      <Button
        variant={filter === "completed" ? "contained" : "outlined"}
        onClick={() => setFilter("completed")}
        sx={{ margin: "0 10px" }}
      >
        Completed
      </Button>
      <Button
        variant={filter === "pending" ? "contained" : "outlined"}
        onClick={() => setFilter("pending")}
        sx={{ margin: "0 10px" }}
      >
        Pending
      </Button>
    </Box>
  );
}

export default TaskFilter;
