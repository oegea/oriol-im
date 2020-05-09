import React, { useEffect, useState } from "react";
import { styled, css } from "frontity";

const Progress = styled.div`
    height: 0.5em;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fccb0b;
    z-index: 99;
`;

const GoBack = styled.p`
    text-align: center;
    position: fixed;
    bottom: 0px;
    background: white;
    width: 100%;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 5px;
    padding-bottom: 6px;
    font-weight: bold;
    z-index: 99;
`;

export default  () => {
    const [readingProgress, setReadingProgress] = useState(0);
    const scrollListener = () => {
  
      const element         = document.body;
      const totalHeight     = element.clientHeight - element.offsetTop - (window.innerHeight);
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      if (windowScrollTop === 0) {
        return setReadingProgress(0);
      }
  
      if (windowScrollTop > totalHeight) {
        return setReadingProgress(100);
      }
  
      setReadingProgress((windowScrollTop / totalHeight) * 100);
    };
    
    useEffect(() => {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    });
  
    return (
        <>
            {readingProgress > 0 && <GoBack><a href="#root">☝️ Volver arriba ☝️</a></GoBack>}
            <Progress className={`reading-progress-bar`} style={{width: `${readingProgress}%`}} />
        </>);
  };
  