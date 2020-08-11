import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div aria-label="Loading spinner" className="spinner">
      <div className="dot1"></div>
      <div className="dot2"></div>
    </div>
  );
};

export default Loading;
