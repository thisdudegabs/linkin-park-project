import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import updates, { Updates } from "../assets/data/updatesData";
import "../styles/newsPage.css";

interface NewsPageParams extends Record<string, string | undefined> {
  newsId: string;
}

const NewsPage: FC = () => {
  const { newsId } = useParams<NewsPageParams>();
  const [news, setNews] = useState<Updates | null>(null);

  useEffect(() => {
    const newsItem = updates.find((item) => item.id === Number(newsId));
    setNews(newsItem || null);
  }, [newsId]);

  return (
    <div className="news-page" style={{ display: "flex" }}>
      {news && (
        <>
          <div className="news-collum" style={{ flex: "1", padding: "10px" }}>
            <h1>{news.title}</h1>
            <p>{news.description}</p>
          </div>
          <div style={{ flex: "1" }}>
            <img
              className="img-section"
              src={news.image}
              alt={news.title}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default NewsPage;
