import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastContext = createContext<(msg: string) => void>(() => {});

export const useToast = () => {
    return useContext(ToastContext);
};

interface ToastProviderProps {
    children: ReactNode;
}

// Create the ToastProvider component
export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');

    const showToast = (msg: string) => {
        setMessage(msg);
        setShow(true);
        setTimeout(() => setShow(false), 5000);
    };

    return (
      <ToastContext.Provider value={showToast}>
          {children}
          <ToastContainer position="bottom-end" className="p-3" style={{ position: 'fixed', zIndex: 1050, bottom: '20px', right: '20px' }}>
              <Toast show={show} onClose={() => setShow(false)} style={{ backgroundColor: '#00AC47', color: '#fff' }}>
                  <Toast.Body dangerouslySetInnerHTML={{ __html: message }} />
              </Toast>
          </ToastContainer>
      </ToastContext.Provider>
    );
};