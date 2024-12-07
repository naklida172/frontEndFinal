import React, {useState} from "react";

const Sections = () => {
    // const [isCompleted, setCompleted] = useState(false);
      const [sectionsList, setSectionsList] = useState([]);
      const addSection = (section) => {
        setSectionsList([...sectionsList, section]);
      };
      return (
        <div id="sections">
          <ul>{sectionsList.map((member, index) => (
          <li key={index}>{member}</li>
        ))}</ul>
        <button onClick={() => addSection("New Session")}>Add Session</button>
        </div>
      );
    };
    
export default Sections;