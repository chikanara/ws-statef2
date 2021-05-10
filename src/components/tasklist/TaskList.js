import React from "react";
import TaskItem from "../taskitem/TaskItem";

const TaskList = ({ tasks, handleDelete, handleComplete,latifa }) => {
  return (
    <div>
  
      {tasks.map((el) => (
        <TaskItem
          todo={el}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          key={el.id}
        />
      ))}
    </div>
  );
};

export default TaskList;
