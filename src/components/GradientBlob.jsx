import React, { useEffect, useRef } from 'react';

function GradientBlob() {
  const wrapperRef = useRef(null);
  const interactiveRef = useRef(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgtX = useRef(0);
  const tgtY = useRef(0);

  useEffect(() => {
    const bubble = interactiveRef.current;
    const wrapper = wrapperRef.current;
    if (!bubble || !wrapper) return;

    let animId;

    function animate() {
      curX.current += (tgtX.current - curX.current) / 20;
      curY.current += (tgtY.current - curY.current) / 20;
      bubble.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`;
      animId = requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      tgtX.current = e.clientX;
      tgtY.current = e.clientY;
    }

    function handleClick(e) {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const burst = document.createElement('div');
      burst.className = 'cr';
      burst.style.left = `${x}px`;
      burst.style.top = `${y}px`;
      burst.style.zIndex = '9999';

      for (let i = 1; i <= 6; i++) {
        const ray = document.createElement('div');
        ray.style.setProperty('--i', i);
        burst.appendChild(ray);
      }

      wrapper.appendChild(burst);
      setTimeout(() => burst.remove(), 1000);
    }

    document.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('click', handleClick);
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* SVG clip path with smooth wavy bezier curves */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="hero-wave-clip" clipPathUnits="objectBoundingBox">
            <path d="
              M 1,0
              L 0.58,0
              C 0.56,0.05 0.55,0.10 0.54,0.16
              C 0.53,0.22 0.53,0.27 0.54,0.32
              C 0.55,0.37 0.56,0.40 0.55,0.44
              C 0.53,0.48 0.50,0.51 0.48,0.55
              C 0.46,0.59 0.45,0.62 0.47,0.66
              C 0.49,0.70 0.51,0.72 0.50,0.76
              C 0.49,0.80 0.47,0.83 0.47,0.87
              C 0.47,0.91 0.48,0.94 0.48,0.97
              C 0.48,0.99 0.48,1.0 0.48,1.0
              L 1,1
              Z
            " />
          </clipPath>
        </defs>
      </svg>

      <div className="gradient-blob-wrapper" ref={wrapperRef}>
        <div className="gradient-bg">
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="g6"></div>
            <div className="g7"></div>
            <div className="g8"></div>
            <div className="g9"></div>
            <div className="g10"></div>
            <div className="interactive" ref={interactiveRef}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GradientBlob;
