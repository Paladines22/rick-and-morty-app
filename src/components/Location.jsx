import React from 'react';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <div className=" rounded-xl z-10 mt-40 ">
      <section className="">
        <h2 className="p-2 pl-40  text-white  rounded-xl">{name}</h2>
        <ul className="flex border-2 bg-[#C9BEDC]/60  text-white rounded-xl">
          <li className="p-2 mx-8">
            <span className="font-bold">Type: </span>
            {type}
          </li>
          <li className="p-2 mx-8">
            <span className="font-bold">Dimension: </span>
            {dimension}
          </li>
          <li className="p-2 mx-8">
            <span className="font-bold">Population: </span> {residents.length}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Location;
