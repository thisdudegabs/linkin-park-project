import React, { FC, useEffect, useState } from "react";
import "../styles/live.css";
import shows from "../assets/data/shows";
interface Show {
  date: string;
  venue: string;
  location: string;
  link?: string;
}

const Live: FC = () => {
  const [showState, setShowState] = useState<Show[]>([]);

  useEffect(() => {
    setShowState(shows);
  }, []);

  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="show-list">
      {showState.map((show, index) => (
        <div className="show" key={index}>
          <div className="show-info">
            <p>{show.date}</p>
            <p>{show.venue}</p>
            <p>{show.location}</p>
          </div>
          <button
            className="ticket-button"
            onClick={() => handleButtonClick(show.link || "")}
          >
            GET TICKET
          </button>
        </div>
      ))}
    </div>
  );
};

export default Live;
