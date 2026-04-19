import React, { useState, useEffect } from 'react';
import './PortfolioForm.css';

const PortfolioForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    gpa: '',
    skills: '',
    projectTitle: '',
    projectDescription: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        skills: initialData.skills.join(', ') // Convert array to comma-separated string for editing
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert skills string back to array
    const submissionData = {
      ...formData,
      skills: formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill !== '')
    };
    onSubmit(submissionData);
  };

  return (
    <div className="portfolio-form-container glass-panel">
      <h2>{initialData ? 'Edit Portfolio' : 'Add New Portfolio'}</h2>
      <form onSubmit={handleSubmit} className="portfolio-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="course">Course</label>
            <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required placeholder="Computer Science" />
          </div>
          <div className="form-group">
            <label htmlFor="gpa">GPA (0-10)</label>
            <input type="number" id="gpa" name="gpa" value={formData.gpa} onChange={handleChange} min="0" max="10" step="0.1" required placeholder="8.5" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills (comma-separated)</label>
          <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} required placeholder="React, Node.js, Python" />
        </div>

        <div className="form-group">
          <label htmlFor="projectTitle">Best Project Title</label>
          <input type="text" id="projectTitle" name="projectTitle" value={formData.projectTitle} onChange={handleChange} required placeholder="E-commerce App" />
        </div>

        <div className="form-group">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange} required rows="3" placeholder="Describe what you built and the technologies used..."></textarea>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-cancel" onClick={onCancel}>Cancel</button>
          <button type="submit" className="btn-submit">
            {initialData ? 'Update Portfolio' : 'Save Portfolio'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PortfolioForm;
