import React, { useEffect, useRef } from "react";
import "../styles/music.css";
import albums from "../assets/data/albums";

const Music: React.FC = () => {
  const albumsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (albumsRef.current) {
      albumsRef.current.classList.add("albums-appear");
    }
  }, []);

  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="albums" ref={albumsRef}>
      {albums.map((album) => (
        <div key={album.id} className="album">
          <img src={album.image} alt={album.title} />
          <div className="album-title">{album.title}</div>
          <button
            className="button"
            onClick={() => handleButtonClick(album.link)}
          >
            SPOTIFY
          </button>
        </div>
      ))}
    </div>
  );
};

export default Music;
