import "./App.css";
import AddStudent from "./components/AddStudent";
import ViewStudents from "./components/ViewStudents";

function App() {
  return (
    <div className="dashboard-wrapper">
      <nav className="sidebar">
        <h2>📊 Portfolio OS</h2>
        <div className="nav-item active">🏠 Dashboard</div>
        <div className="nav-item">👥 Students</div>
        <div className="nav-item">⚙️ Settings</div>
      </nav>

      <main className="main-content">
        <h1>Welcome Back, Mohak!</h1>

        <div className="header-stats">
          <div className="stat-card">
            <small>Active Students</small>
            <h2>{/* We'll link the count later */}1</h2>
          </div>
          <div className="stat-card">
            <small>Total Courses</small>
            <h2>3</h2>
          </div>
        </div>

        <div className="card">
          <AddStudent />
        </div>

        <ViewStudents />
      </main>
    </div>
  );
}

export default App;
