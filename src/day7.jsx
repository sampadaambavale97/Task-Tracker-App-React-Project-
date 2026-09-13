import { useState } from "react";

function Day7() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">
          Task Tracker
        </h1>

        <div className="flex gap-2 mt-4">
          <input
            className="border p-2 flex-1 rounded"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            className="bg-blue-600 text-white px-4 rounded"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        <ul className="mt-5">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-3"
            >
              <span className={item.completed ? "line-through" : ""}>
                {item.text}
              </span>

              <div>
                <button
                  className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
                  onClick={() => completeTask(index)}
                >
                  Complete
                </button>

                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Day7;