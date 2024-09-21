import React from 'react';
import {FaTimes } from 'react-icons/fa';
import Add from "../assets/add.png";

const MessageAdd = ({onClose}) => {
  
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
                  width: "25rem",
                height:"250px"
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
    
                <img
            src={Add}
            alt="Add"
            style={{ width: "20%", height: "auto", maxWidth: "505px" }}
          />
                
                <h4 className="my-3">إضافة الشحنة كملف  اكسيل</h4>
                
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
    
                اضافه
                </button>
              </div>
   
  );
};

export default MessageAdd;
