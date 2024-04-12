"use client";
import React, { useState, useEffect } from 'react';
import "./Typewriter.css";

export default function Typewriter ({ text, time, design, increment }) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const typingTimer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }
        else {
          if(increment) {
            increment();
          }
        }
      }, time); 
  
      return () => clearTimeout(typingTimer);
    }, [currentIndex, text]);
  
    return <span className='text' style={design} >{displayText}</span>;
  };