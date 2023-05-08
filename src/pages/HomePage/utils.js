import { useEffect, useState } from 'react';
import css from './HomePage.module.css';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex(prevCharIndex =>
        prevCharIndex < text.length ? prevCharIndex + 1 : prevCharIndex
      );
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    setDisplayText(text.slice(0, charIndex));
  }, [charIndex, text]);

  return <div className={css.text}>{displayText}</div>;
};

export default TypingEffect;
