import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle, Loader2 } from 'lucide-react';
import StudentCard from './components/StudentCard';
import PortfolioForm from './components/PortfolioForm';
import './App.css';

const API_URL = 'http://localhost:5000/api/students';

function App() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State for managing form modal visibility and editing data
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(API_URL);
      setStudents(res.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch portfolios. Please ensure backend is running.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle form submission (Create or Update)
  const handleFormSubmit = async (formData) => {
    try {
      if (editingStudent) {
        // Update existing
        await axios.put(`${API_URL}/${editingStudent._id}`, formData);
      } else {
        // Create new
        await axios.post(API_URL, formData);
      }
      setIsFormVisible(false);
      setEditingStudent(null);
      fetchStudents(); // Refresh the list
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'An error occurred while saving.');
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchStudents(); // Refresh the list after delete
    } catch (err) {
      console.error(err);
      alert('Failed to delete the portfolio.');
    }
  };

  // Open form for adding
  const handleAddClick = () => {
    setEditingStudent(null);
    setIsFormVisible(true);
  };

  // Open form for editing
  const handleEditClick = (student) => {
    setEditingStudent(student);
    setIsFormVisible(true);
  };

  // Cancel form
  const handleCancelClick = () => {
    setIsFormVisible(false);
    setEditingStudent(null);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1>Student Portfolio Manager</h1>
          <button className="add-btn" onClick={handleAddClick}>
            <PlusCircle size={18} />
            Add Portfolio
          </button>
        </div>
      </header>

      <main className="app-main">
        {error && (
          <div className="error-banner">
            {error}
          </div>
        )}

        {isFormVisible ? (
          <div className="modal-overlay">
            <div className="modal-content">
              <PortfolioForm 
                onSubmit={handleFormSubmit} 
                onCancel={handleCancelClick} 
                initialData={editingStudent} 
              />
            </div>
          </div>
        ) : null}

        {isLoading ? (
          <div className="loading-container">
            <Loader2 className="spinner" size={40} />
            <p>Loading Portfolios...</p>
          </div>
        ) : (
           !isFormVisible && (
            <div className="portfolios-grid">
              {students.length > 0 ? (
                students.map((student) => (
                  <StudentCard 
                    key={student._id} 
                    student={student} 
                    onEdit={handleEditClick}
                    onDelete={handleDelete}
                  />
                ))
              ) : (
                <div className="empty-state glass-panel">
                  <div className="empty-state-content">
                    <h3>No Portfolios Found</h3>
                    <p>Click "Add Portfolio" to create the first one.</p>
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </main>
    </div>
  );
}

export default App;
