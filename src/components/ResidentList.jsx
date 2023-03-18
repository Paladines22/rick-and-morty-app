import React from 'react';
import ResidentInfo from './ResidentInfo';
import '../index.css';

const ResidentList = ({ residents, handleImg }) => {
  const shouldShowImage = residents.length > 5;
  if (shouldShowImage) {
    handleImg(true);
  } else {
    handleImg(false);
  }

  return (
    <section className="w-full residents-container z-20 pt-20">
      {residents.map((resident, index) => (
        <ResidentInfo key={index} urlResident={resident} />
      ))}
    </section>
  );
};

export default ResidentList;
