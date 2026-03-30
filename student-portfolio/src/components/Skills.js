import { useState } from "react";

function Skills() {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section>
      <h2>Skills</h2>

      <button onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? "Hide Skills" : "Show Skills"}
      </button>

      {showSkills && (
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      )}
    </section>
  );
}

export default Skills;
