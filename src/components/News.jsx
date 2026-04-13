import React from 'react';
import './News.css';

const News = () => {
  const posts = [
    { title: '신제품 에코 코튼 방수요 출시', date: '2026.04.10', category: 'Notice' },
    { title: '여름철 방수요 관리 및 세탁법 안내', date: '2026.04.05', category: 'Blog' },
    { title: '뮤라 팝업 스토어 오픈 일정 안내', date: '2026.03.28', category: 'News' },
  ];

  return (
    <section id="news" className="news">
      <h2 className="section-title">새로운 소식</h2>
      <p className="section-subtitle">뮤라의 최근 소식과 유용한 팁을 전해드립니다.</p>
      
      <div className="news-grid">
        {posts.map((post, i) => (
          <div key={i} className="news-card card">
            <div className="news-img-placeholder">Image</div>
            <div className="news-info">
              <span className="category">{post.category}</span>
              <h3 className="serif">{post.title}</h3>
              <p className="date">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
