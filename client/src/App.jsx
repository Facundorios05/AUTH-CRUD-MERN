import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/register" element={<h1>Register Page</h1>} />
        <Route path="/tasks" element={<h1>Tasks Page</h1>} />
        <Route path="/add-task" element={<h1>Add task Page</h1>} />
        <Route path="/tasks/:id" element={<h1>Task id Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
