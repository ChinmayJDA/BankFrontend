import React, { useState, useEffect } from 'react';
import '../../assets/css/news.css'; 

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=finance&apiKey=a40debaae25346debf03ddadb0c763c5&pageSize=3');
      const data = await response.json();
      setNews(data.articles); 
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="news-cards">
        {news && news.map((article, index) => ( // Added conditional check for news
          <div className="card" key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
