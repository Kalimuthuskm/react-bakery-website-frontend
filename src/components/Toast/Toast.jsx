// src/components/Toast/Toast.jsx
import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      <div className="toast-content">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;