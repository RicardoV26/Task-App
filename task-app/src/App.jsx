import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask('');
    }
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl p-8">

        <h1 className="text-4xl font-extrabold text-white text-center mb-8 tracking-tight">
          My Task List ✨
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="What do you need to do?"
            className="flex-1 rounded-2xl bg-white/20 border border-white/30 px-4 py-3 text-white placeholder-white/70 outline-none focus:ring-4 focus:ring-pink-300/40 focus:bg-white/25 transition"
          />
          <button
            onClick={addTask}
            className="rounded-2xl bg-white text-pink-600 font-bold px-5 py-3 shadow-lg hover:scale-105 hover:bg-pink-100 transition duration-200"
          >
            Add
          </button>
        </div>

        {tasks.length === 0 ? (
          <div className="text-center text-white/80 bg-white/10 border border-dashed border-white/20 rounded-2xl py-6">
            🌅 No tasks yet... Add one above
          </div>
        ) : (
          <ul className="space-y-3">
            {tasks.map((t, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white/15 border border-white/20 backdrop-blur-md rounded-2xl px-4 py-3 text-white shadow-md hover:bg-white/20 hover:translate-x-1 transition duration-200"
              >
                <span>✨ {t}</span>
                <button
                  onClick={() => deleteTask(index)}
                  className="ml-3 rounded-xl bg-white/20 hover:bg-red-500 text-white text-xs font-bold px-3 py-1.5 border border-white/30 hover:border-red-400 transition duration-200"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App
