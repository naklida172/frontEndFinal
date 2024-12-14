import React, { useState, useEffect, useCallback } from 'react';
import Timer from './timer';
import Interval from './intervals';

const Sections = () => {
  const [sectionsList, setSectionsList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [manualMinutes, setManualMinutes] = useState(0);

  useEffect(() => {
    if (sectionsList.length > 0) {
      setManualMinutes(sectionsList[0].time);
    } else {
      setManualMinutes(0);
    }
  }, [sectionsList]);

  const handleSectionComplete = useCallback((skipState=false) => {
    setSectionsList((prevSectionsList) => {
      const updatedList = [...prevSectionsList];
      if(updatedList.length > 0){
        updatedList[0].skipped=skipState;
        setCompletedList((prevCompletedList) => [...prevCompletedList,updatedList[0]]);
        updatedList.shift();
      }
      if (updatedList.length===0) {
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
      <Interval addSection={addSection} sectionsList={sectionsList} completedList={completedList}/>
    </div>
  );
};

export default Sections;
