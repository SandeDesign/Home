import React from 'react';

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatbotModal({ isOpen, onClose }: ChatbotModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      id="chatbot-modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '1rem'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '64rem',
          height: '80vh',
          backgroundColor: '#0a0a0a',
          borderRadius: '0.5rem',
          border: '1px solid #9333ea',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            padding: '0.5rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div style={{ width: '100%', height: '100%' }}>
          <iframe
            src="https://www.tixaeagents.ai/app/eu/render/ao22v7x9uuxu62re/iframe"
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="Chatbot"
          />
        </div>
      </div>
    </div>
  );
}