import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewStudents() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:3000/student/view");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    if (window.confirm("Delete this record?")) {
      await axios.delete(`http://localhost:3000/student/delete/${id}`);
      fetchStudents();
    }
  };

  return (
    <div>
      <h3>Recent Enrollments</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>
                <strong>{s.name}</strong>
              </td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(s._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewStudents;
