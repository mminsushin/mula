"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function QnaList({ faqCategories }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openSlug, setOpenSlug] = useState(null);

  const allFaqs = faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({ ...faq, categoryTitle: cat.categoryTitle }))
  );

  const filteredFaqs = searchTerm
    ? allFaqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  const toggleAccordion = (slug) => {
    setOpenSlug(openSlug === slug ? null : slug);
  };

  const highlightMula = (text) => {
    if (!text) return text;
    const parts = text.split(/(뮤라)/g);
    return parts.map((part, i) =>
      part === '뮤라' ? <span key={i} className="mula-highlight">뮤라</span> : part
    );
  };

  const renderCard = (faq) => {
    const isOpen = openSlug === faq.slug;
    return (
      <div
        key={faq.slug}
        id={faq.slug}
        className="qna-card"
        onClick={() => toggleAccordion(faq.slug)}
        style={{
          borderRadius: '16px',
          backgroundColor: 'var(--pure-white)',
          boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.08)' : '0 4px 15px rgba(0,0,0,0.03)',
          border: '1px solid var(--soft-ivory)',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Question */}
        <div
          className="qna-card-question"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: isOpen ? 'var(--pale-ivory)' : 'transparent',
            transition: 'background-color 0.3s ease',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span className="serif" style={{ fontSize: '1.6rem', color: 'var(--accent-beige)', fontWeight: 'bold' }}>Q</span>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--dark-brown)', margin: 0, fontWeight: isOpen ? 'bold' : 'normal', lineHeight: '1.5' }}>
              {highlightMula(faq.question)}
            </h3>
          </div>
          <div style={{ color: 'var(--accent-beige)', flexShrink: 0, marginLeft: '1rem' }}>
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </div>

        {/* Answer — always in DOM for AI crawlers; CSS-only collapse */}
        <div
          className="qna-card-answer"
          aria-hidden={!isOpen}
          style={{
            borderTop: isOpen ? '1px dashed #eee' : 'none',
            maxHeight: isOpen ? '600px' : '0',
            overflow: 'hidden',
            padding: isOpen ? undefined : '0',
            marginTop: isOpen ? undefined : '0',
            transition: 'max-height 0.35s ease, padding 0.35s ease',
          }}
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span className="serif" style={{ fontSize: '1.6rem', color: 'var(--warm-grey)', fontWeight: 'bold', lineHeight: '1' }}>A</span>
            <p style={{ color: 'var(--dark-brown)', fontSize: '1.05rem', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
              {highlightMula(faq.answer)}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const totalCount = allFaqs.length;
  const displayCount = filteredFaqs ? filteredFaqs.length : totalCount;

  return (
    <div style={{ marginTop: '1.5rem' }}>
      {/* Search Bar + Count row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
      }}>
        <div style={{ position: 'relative', flex: '1 1 320px', minWidth: 0 }}>
          <input
            type="text"
            placeholder="궁금하신 내용을 검색해보세요 (예: 세탁, 건조기)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px 14px 48px',
              fontSize: '1rem',
              border: '2px solid var(--accent-beige)',
              borderRadius: '30px',
              outline: 'none',
              color: 'var(--dark-brown)',
              backgroundColor: 'var(--pure-white)',
            }}
          />
          <Search size={20} color="var(--warm-grey)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
        </div>
        <div style={{ fontSize: '0.95rem', color: 'var(--warm-grey)', whiteSpace: 'nowrap', flexShrink: 0 }}>
          총 <span style={{ fontWeight: 'bold', color: 'var(--dark-brown)' }}>{displayCount}</span>개의 답변
        </div>
      </div>

      {/* Search result (flat list) */}
      {filteredFaqs ? (
        filteredFaqs.length > 0 ? (
          <div className="qna-list-grid">
            {filteredFaqs.map((faq) => renderCard(faq))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--warm-grey)' }}>
            검색 결과가 없습니다. 다른 키워드로 검색해보세요.
          </div>
        )
      ) : (
        /* Category grouped view */
        faqCategories.map((cat) => (
          <section key={cat.id} id={cat.id} style={{ marginBottom: '2rem' }}>
            <h2
              className="serif"
              style={{
                fontSize: '1.3rem',
                color: 'var(--dark-brown)',
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: '2px solid var(--accent-beige)',
                display: 'inline-block',
              }}
            >
              {cat.title}
            </h2>
            <div className="qna-list-grid">
              {cat.faqs.map((faq) => renderCard(faq))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
