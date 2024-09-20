import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';


const messageSucess = ({onClose}) => {
  
  return (
    <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                zIndex: 1000,
                textAlign: 'center',
              }}
            >
              
                <FaTimes
                  size={20}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer',
                    color: '#333',
                  }}
                  onClick={onClose}
                />
    
                <FaCheckCircle size={50} color="#ECF2FF" />
                
                <h4 className="my-3">إصدار الملف بنجاح</h4>
                
                <button
                 onClick={onClose}
                  style={{
                    padding: '10px 20px',
                    backgroundImage: 'linear-gradient(180deg, #135D66 0%, #22A6B6 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
    
                استمرار 
                </button>
              </div>
   
  );
};

export default messageSucess;
