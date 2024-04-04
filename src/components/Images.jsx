import { useState } from "react";

export const ImageGallery = () => {
  // Ustawienie początkowego stanu z pierwszym obrazkiem
  const [currentImage, setCurrentImage] = useState(0);

  // Tablica z adresami obrazków
  const images = ["square.png", "check.png"];

  // Funkcja obsługująca kliknięcie w miniaturę
  const handleClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div onClick={handleClick}>
      <img src={images[currentImage]} alt={`Obrazek ${currentImage + 1}`} />
    </div>
  );
};
