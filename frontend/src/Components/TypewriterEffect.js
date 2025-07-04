import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ texts, typingSpeed = 100, delayBetweenTexts = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Handle the typing effect
      const currentFullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        // If we're typing, add the next character
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        setTypingDelay(typingSpeed);
        
        // If we've typed the whole text, start deleting after a delay
        if (currentText === currentFullText) {
          setIsDeleting(true);
          setTypingDelay(delayBetweenTexts);
        }
      } else {
        // If we're deleting, remove the last character
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        setTypingDelay(typingSpeed / 2);
        
        // If we've deleted everything, move to the next text
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, typingDelay);
    
    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, delayBetweenTexts, typingDelay]);

  return (
    <span className="typewriter">
      {currentText}<span className="typewriter__cursor">|</span>
    </span>
  );
};

export default TypewriterEffect;