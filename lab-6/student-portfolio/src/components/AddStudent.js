import React, { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/student/add", {
        name,
        email,
        course,
      });
      alert("✨ Student Added Successfully!");
      window.location.reload();
    } catch (err) {
      alert("Error connecting to backend!");
    }
  };

  return (
    <div>
      <h3 style={{ marginTop: 0 }}>Add New Student</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Course Name"
          onChange={(e) => setCourse(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">
          Enroll Student
        </button>
      </form>
    </div>
  );
}
export default AddStudent;
