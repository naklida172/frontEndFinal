import React, { useState } from "react";

const Interval = () => {
  const [workTime, setWorkTime] = useState('');
  const [breakTime, setBreakTime] = useState('');
  const [sectionsList, setSectionsList] = useState([]);

  const addInterval = (timeInput, isWorkSession) => {
    const trimmedTime = timeInput.trim();
    if (!isNaN(trimmedTime) && trimmedTime !== "" && Number(trimmedTime) !== 0) {
      addSection({ time: trimmedTime, isWorkSession, completed: false });
    } else {
      alert(
        "This type of duration is not available, please write a positive integer"
      );
    }
  };

  const addSection = (section) => {
    setSectionsList([...sectionsList, section]);
  };

  return (
    <div>
      <div id="intervals">
        <div id="work">
          <h2>Work</h2>
          <input
            type="text"
            placeholder="Duration"
            value={workTime}
            onChange={(event) => setWorkTime(event.target.value)}
          />
          <button
            onClick={() => {
              addInterval(workTime, true);
              setWorkTime(''); // Reset input field
            }}
          >
            Add
          </button>
        </div>
        <div id="break">
          <h2>Break</h2>
          <input
            type="text"
            placeholder="Duration"
            value={breakTime}
            onChange={(event) => setBreakTime(event.target.value)}
          />
          <button
            onClick={() => {
              addInterval(breakTime, false);
              setBreakTime(''); // Reset input field
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div id="sections">
        <ul id="sectionsList">
          {sectionsList.map((member, index) => (
            <li key={index} style={{ background: member.isWorkSession ? 'green' : 'blue', color: 'black' }}>
              {`Duration: ${member.time}, Work Session: ${member.isWorkSession ? 'Yes' : 'No'}, Completed: ${member.completed}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Interval;
