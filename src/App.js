import "./App.css";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [breed, setBreed] = useState("");
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    if (breed && numImages > 0) {
      try {
        const res = await fetch(
          `https://dog.ceo/api/breed/${breed}/images/random/${numImages}`
        );
        const data = await res.json();

        setImages(data.message);
      } catch (error) {
        console.error("Error: Unable to Fetch Images:", error);
      }
    }
  };

  useEffect(() => {
    fetchImages();
  }, [breed, numImages]);

  const appStyle = {
    backgroundImage: "url('/Images/dogbones.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  const containerStyle = {
    backgroundImage: `url('/Images/puppy.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Router>
      <div style={appStyle}>
        <div className="container">
          <div className="dawgs">
            <div style={containerStyle}>
              <Header title="Dog Image Gallery" />
            </div>
          </div>
          <div className="body-container">
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <BreedSelector
                      setBreed={setBreed}
                      setNumImages={setNumImages}
                    />
                  </div>
                }
              ></Route>
              <Route path="/about" element={<div>About Page</div>}></Route>
            </Routes>
          </div>

          <ImageGallery images={images} />

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
