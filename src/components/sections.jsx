import React, { useState, useEffect, useCallback } from 'react';
import Timer from './timer';
import Interval from './intervals';

const Sections = () => {
  const [sectionsList, setSectionsList] = useState([]);
  const [manualMinutes, setManualMinutes] = useState(0);

  useEffect(() => {
    if (sectionsList.length > 0 && !sectionsList[0].completed) {
      setManualMinutes(sectionsList[0].time);
    } else {
      setManualMinutes(0);
    }
  }, [sectionsList]);

  const handleSectionComplete = useCallback(() => {
    setSectionsList((prevSectionsList) => {
      const updatedList = [...prevSectionsList];
      updatedList[0].completed = true;
      updatedList.push(updatedList.shift());

      if (updatedList[0].completed) {
        setManualMinutes(0);
      } else {
        setManualMinutes(updatedList[0].time);
      }

      return updatedList;
    });
  }, []);

  const addSection = (section) => {
    setSectionsList((prevSectionsList) => [...prevSectionsList, section]);
  };

  return (
    <div>
      <Timer manualMinutes={manualMinutes} onSectionComplete={handleSectionComplete} />
      <Interval addSection={addSection} sectionsList={sectionsList} />
    </div>
  );
};

export default Sections;
