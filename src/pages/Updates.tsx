import React, { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/updates.css";
import updates from "../assets/data/updatesData";

interface Updates {
  id: number;
  title: string;
  image: string;
}

const Updates: FC = () => {
  const updatesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (updatesRef.current) {
      updatesRef.current.classList.add("updates-appear");
    }
  }, []);

  return (
    <div className="updates" ref={updatesRef}>
      {updates.map((news) => (
        <Link to={`/updates/${news.id}`} key={news.id}>
          <div className="news">
            <img src={news.image} alt={news.title} />
            <div className="news-title">{news.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Updates;
