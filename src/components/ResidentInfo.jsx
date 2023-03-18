import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);

      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadResidentInfo();
  }, []);

  return (
    <article className="">
      <div className="ml-5">
        <img
          className="rounded-full w-60 border-4 border-[#893446]"
          src={residentInfo?.image}
          alt={residentInfo?.name}
        />
      </div>
      <section className="border-[#893446] border-4 rounded-xl">
        <h3 className="bg-[#f0e48c] p-3 rounded-xl text-[#893446] font-bold">
          {residentInfo?.name}
        </h3>
        <ul className="bg-[#C9BEDC] rounded px-2 py-4">
          <li>
            <span className="font-bold">Specie: </span>
            {residentInfo?.species}
          </li>
          <li>
            <span className="font-bold">Status: </span>
            {residentInfo?.status}
          </li>
          <li>
            <span className="font-bold">Origen: </span>
            {residentInfo?.origin.name}
          </li>
          <li>
            <span className="font-bold">Appearances in episodes: </span>
            {residentInfo?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentInfo;
