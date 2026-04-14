"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function QnaList({ faqs }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const highlightMula = (text) => {
    if (!text) return text;
    const parts = text.split(/(뮤라)/g);
    return parts.map((part, i) => 
      part === '뮤라' ? <span key={i} className="mula-highlight">뮤라</span> : part
    );
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      {/* Search Bar */}
      <div style={{ 
        position: 'relative', 
        marginBottom: '3rem',
        maxWidth: '600px',
        margin: '0 auto 3rem auto'
      }}>
        <input 
          type="text" 
          placeholder="궁금하신 내용을 검색해보세요 (예: 세탁, 건조기)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '16px 20px 16px 50px',
            fontSize: '1.1rem',
            border: '2px solid var(--accent-beige)',
            borderRadius: '30px',
            outline: 'none',
            color: 'var(--dark-brown)',
            backgroundColor: 'var(--pure-white)'
          }}
        />
        <Search size={24} color="var(--warm-grey)" style={{ position: 'absolute', left: '18px', top: '16px' }} />
      </div>

      {/* FAQ Result Count */}
      <div style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: 'var(--warm-grey)' }}>
        총 <span style={{ fontWeight: 'bold', color: 'var(--dark-brown)' }}>
          {searchTerm ? filteredFaqs.length : 60}
        </span>개의 답변이 있습니다.
      </div>

      {/* FAQ Cards */}
      <div className="qna-list-grid">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="qna-card"
                onClick={() => toggleAccordion(idx)}
                style={{ 
                  borderRadius: '16px',
                  backgroundColor: 'var(--pure-white)',
                  boxShadow: isOpen ? '0 10px 30px rgba(0,0,0,0.08)' : '0 4px 15px rgba(0,0,0,0.03)',
                  border: '1px solid var(--soft-ivory)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Question */}
                <div className="qna-card-question" style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  backgroundColor: isOpen ? 'var(--pale-ivory)' : 'transparent',
                  transition: 'background-color 0.3s ease'
                }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span className="serif" style={{ fontSize: '1.6rem', color: 'var(--accent-beige)', fontWeight: 'bold' }}>Q</span>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--dark-brown)', margin: 0, fontWeight: isOpen ? 'bold' : 'normal', lineHeight: '1.5' }}>
                      {highlightMula(faq.question)}
                    </h3>
                  </div>
                  <div style={{ color: 'var(--accent-beige)' }}>
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>

                {/* Answer */}
                {isOpen && (
                  <div className="qna-card-answer" style={{ 
                    borderTop: '1px dashed #eee',
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span className="serif" style={{ fontSize: '1.6rem', color: 'var(--warm-grey)', fontWeight: 'bold', lineHeight: '1' }}>A</span>
                      <p style={{ color: 'var(--dark-brown)', fontSize: '1.05rem', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                        {highlightMula(faq.answer)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--warm-grey)' }}>
            검색 결과가 없습니다. 다른 키워드로 검색해보세요.
          </div>
        )}
      </div>
    </div>
  );
}
