import React from 'react';
import { Mail, BookOpen, Presentation, Award, Trash2, Edit } from 'lucide-react';
import './StudentCard.css';

const StudentCard = ({ student, onEdit, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this portfolio?')) {
      onDelete(student._id);
    }
  };

  return (
    <div className="student-card glass-panel">
      <div className="card-header">
        <div className="avatar">
          {student.name.charAt(0).toUpperCase()}
        </div>
        <div className="header-info">
          <h3>{student.name}</h3>
          <p className="email">
            <Mail size={14} /> {student.email}
          </p>
        </div>
        <div className="actions">
          <button onClick={() => onEdit(student)} className="btn-icon edit-btn" title="Edit">
            <Edit size={16} />
          </button>
          <button onClick={handleDelete} className="btn-icon delete-btn" title="Delete">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="card-body">
        <div className="info-row">
          <div className="info-item">
            <BookOpen size={16} className="icon" />
            <span>Course:</span>
            <strong>{student.course}</strong>
          </div>
          <div className="info-item">
            <Award size={16} className="icon" />
            <span>GPA:</span>
            <strong>{student.gpa}/10</strong>
          </div>
        </div>

        <div className="skills-container">
          {student.skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>

        <div className="project-section">
          <h4>
            <Presentation size={16} className="icon" />
            {student.projectTitle}
          </h4>
          <p>{student.projectDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
