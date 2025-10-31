import React from "react";
import Card from "../components/Card";
import TaskManager from "../components/TaskManager";

const Tasks = () => {
  return (
    <div className="space-y-6">
      <Card>
        <TaskManager />
      </Card>
    </div>
  );
};

export default Tasks;
