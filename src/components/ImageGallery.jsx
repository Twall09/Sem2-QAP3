import "../App.css";

const ImageGallery = ({ images }) => {
  return (
    <div className="dog-images">
      {images.map((image, index) => (
        <img key={index} src={image} alt="Some Dog" className="gallery" />
      ))}
    </div>
  );
};

export default ImageGallery;
