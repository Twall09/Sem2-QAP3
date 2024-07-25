import React, { useState, useEffect } from "react";
import { FaDog } from "react-icons/fa6";

const BreedSelector = ({ setBreed, setNumImages }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await res.json();
      setBreeds(Object.keys(data.message));
    };
    fetchBreeds();
  }, []);

  const setSubmit = (e) => {
    e.preventDefault();
    const breed = e.target.breed.value;
    const images = e.target.images.value;
    setBreed(breed);
    setNumImages(images);
  };
  return (
    <div className="breed-form">
      <form onSubmit={setSubmit}>
        <label>
          <h3>Select Breed: </h3>
          <select name="breed">
            <option value="">--Select--</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label>
          <h3>Image Count: </h3>
          <input
            type="number"
            name="images"
            min="1"
            max="100"
            defaultValue="1"
          ></input>
        </label>
        <button type="submit">
          See Images: <FaDog />
        </button>
      </form>
    </div>
  );
};

export default BreedSelector;
