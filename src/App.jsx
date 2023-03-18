import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getRandomNumber } from './utils/getRandomNumber';
import Location from './components/Location';
import ResidentList from './components/ResidentList';

const App = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [idLocationValue, setIdLocationValue] = useState('');
  const [isImg, setIsImg] = useState(false);

  const getIdLocationRandom = () => getRandomNumber(1, 126);

  const loadLocationInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    try {
      const res = await axios.get(url);

      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const idLocationHandleChange = (e) => {
    const newValue = e.target.value;

    if (/^\d{0,3}$/.test(newValue)) setIdLocationValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idLocationValue) loadLocationInfo(idLocationValue);
    else loadLocationInfo(getIdLocationRandom());
  };

  useEffect(() => {
    loadLocationInfo(getIdLocationRandom());
  }, []);

  const handleImg = (e) => {
    setIsImg(e);
  };

  console.log(isImg);

  return (
    <div className="bg-black min-h-screen w-screen flex flex-col justify-center items-center p-20 text-white relative ">
      {/* Posicion relativa para utiizarse como referencia. Fondo del color oscuro. Altura minima y paddings Y, para garantizar que las images superior y la inferios se visualizan completas */}
      <img
        src="/src/public/rick-and-morty-up.png"
        alt=""
        className={`absolute  w-full z-0 top-0 object-top object-containt ${
          isImg ? 'h-1/2' : 'h-full'
        }`}
      />
      {/*Imagen superior. Posicionada, colorcarse atras */}
      {/* <div
        className="background-container bg-cover w-full h-full absolute z-0"
        style={{
          backgroundImage: `url("/src/public/rick-and-morty-up.png"), url("/src/public/rick-and-morty-down.png")`,
          backgroundPosition: 'right center',
        }}
      >
        {' '}
      </div> */}
      {/* <div className="bg-container absolute top-0 left-0 w-full h-full">
        <img
          src="/src/public/rick-and-morty-up.png"
          alt=""
          className="absolute top-0 left-0 w-full h-1/2 object-cover object-position-top object-left"
          style={{ height: '100%' }}
        />
        <img
          src="/src/public/rick-and-morty-down.png"
          alt=""
          className="absolute top-0 left-0 w-full h-1/2 object-cover object-position-bottom object-left"
          style={{ height: '100%' }}
        />
      </div> */}

      <div className="flex flex-wrap justify-around mt-10 relative">
        <img src="/src/public/app-name.png" className="z-20 right-8  " alt="" />
        <form onSubmit={handleSubmit} className="z-20 rounded-3xl ">
          <input
            className="text-black w-96 px-8 py-2 rounded-3xl"
            type="search"
            name="id-location"
            value={idLocationValue}
            onChange={idLocationHandleChange}
            placeholder="Type a number between 1 and 126"
          />
          <input
            className="bg-[#f0e48c] border-[#893446] border-2 rounded-3xl  text-[#893446] py-2 px-10"
            type="submit"
            value="search"
          />
        </form>
      </div>
      {locationInfo && <Location {...locationInfo} />}
      {locationInfo && (
        <ResidentList residents={locationInfo.residents} handleImg={handleImg} />
      )}

      <img
        src="/src/public/rick-and-morty-down.png"
        alt=""
        className={`w-full absolute object-bottom object-cover bottom-0 h-1/2 z-0 ${
          isImg ? 'block' : 'hidden'
        } `}
      />

      {/* Imagen inferior. Posicionada */}
    </div>
  );
};

export default App;
