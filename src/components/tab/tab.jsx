import './tab.css';
import { useEffect } from 'react';

const Tab = ({ tabs, activeTab, onTabChange, className = '' }) => {
  useEffect(() => {
    console.log('Tab component mounted, onTabChange is:', typeof onTabChange);
  }, [onTabChange]);

  const handleTabClick = (tabId) => {
    console.log('Tab clicked:', tabId);
    if (onTabChange && typeof onTabChange === 'function') {
      onTabChange(tabId);
    } else {
      console.error('onTabChange is not a function!', onTabChange);
    }
  };

  const renderSticker = (tabId, isActive) => {
    const stickerStyle = {
      width: 'auto',
      height: '48px',
      opacity: isActive ? 1 : 0.5,
      transition: 'opacity 0.2s ease',
      objectFit: 'contain',
    };

    if (tabId === 'developer') {
      return (
        <img
          src="/assets/dev.png"
          alt="Developer"
          style={stickerStyle}
          className="tab-sticker"
        />
      );
    } else if (tabId === 'designer') {
      return (
        <img
          src="/assets/designer.png"
          alt="Designer"
          style={stickerStyle}
          className="tab-sticker"
        />
      );
    }
    return null;
  };

  return (
    <div className={`reusable-tabs ${className}`}>
      <div className="tab-grid">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-grid-cell ${activeTab === tab.id ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              handleTabClick(tab.id);
            }}
            type="button"
            style={{ cursor: 'pointer', position: 'relative', zIndex: 30 }}
          >
            {activeTab === tab.id && (
              <svg
                className="pencil-bg"
                viewBox="0 0 120 50"
                preserveAspectRatio="none"
                style={{ pointerEvents: 'none' }}
              >
                <path
                  d="M0,2 L120,12"
                  stroke="#d4d4d4"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M0,5 L120,15"
                  stroke="#c8c8c8"
                  strokeWidth="1.0"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                <path
                  d="M0,8 L120,18"
                  stroke="#d0d0d0"
                  strokeWidth="1.1"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.58"
                />
                <path
                  d="M0,11 L120,21"
                  stroke="#cccccc"
                  strokeWidth="1.3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.62"
                />
                <path
                  d="M0,14 L120,24"
                  stroke="#d4d4d4"
                  strokeWidth="0.9"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.56"
                />
                <path
                  d="M0,17 L120,27"
                  stroke="#c8c8c8"
                  strokeWidth="1.1"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M0,20 L120,30"
                  stroke="#d0d0d0"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.58"
                />
                <path
                  d="M0,23 L120,33"
                  stroke="#cccccc"
                  strokeWidth="1.0"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.61"
                />
                <path
                  d="M0,26 L120,36"
                  stroke="#d4d4d4"
                  strokeWidth="1.3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.57"
                />
                <path
                  d="M0,29 L120,39"
                  stroke="#c8c8c8"
                  strokeWidth="1.1"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.59"
                />
                <path
                  d="M0,32 L120,42"
                  stroke="#d0d0d0"
                  strokeWidth="0.9"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                <path
                  d="M0,35 L120,45"
                  stroke="#cccccc"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M0,38 L120,48"
                  stroke="#d4d4d4"
                  strokeWidth="1.0"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.58"
                />
                <path
                  d="M0,41 L120,51"
                  stroke="#c8c8c8"
                  strokeWidth="1.1"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.56"
                />
                <path
                  d="M5,0 L15,50"
                  stroke="#d0d0d0"
                  strokeWidth="1.0"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.58"
                />
                <path
                  d="M11,0 L21,50"
                  stroke="#c8c8c8"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                <path
                  d="M17,0 L27,50"
                  stroke="#d4d4d4"
                  strokeWidth="0.9"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M23,0 L33,50"
                  stroke="#cccccc"
                  strokeWidth="1.1"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.57"
                />
                <path
                  d="M29,0 L39,50"
                  stroke="#d0d0d0"
                  strokeWidth="1.3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.59"
                />
                <path
                  d="M35,0 L45,50"
                  stroke="#c8c8c8"
                  strokeWidth="1.0"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.56"
                />
                <path
                  d="M41,0 L51,50"
                  stroke="#d4d4d4"
                  strokeWidth="1.1"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.58"
                />
                <path
                  d="M47,0 L57,50"
                  stroke="#cccccc"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                <path
                  d="M53,0 L63,50"
                  stroke="#d0d0d0"
                  strokeWidth="0.9"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M59,0 L69,50"
                  stroke="#c8c8c8"
                  strokeWidth="1.1"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.57"
                />
                <path
                  d="M65,0 L75,50"
                  stroke="#d4d4d4"
                  strokeWidth="1.3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.59"
                />
                <path
                  d="M71,0 L81,50"
                  stroke="#cccccc"
                  strokeWidth="1.0"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.56"
                />
                <path
                  d="M77,0 L87,50"
                  stroke="#d0d0d0"
                  strokeWidth="1.1"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.58"
                />
                <path
                  d="M83,0 L93,50"
                  stroke="#c8c8c8"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                <path
                  d="M89,0 L99,50"
                  stroke="#d4d4d4"
                  strokeWidth="0.9"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M95,0 L105,50"
                  stroke="#cccccc"
                  strokeWidth="1.1"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.57"
                />
                <path
                  d="M101,0 L111,50"
                  stroke="#d0d0d0"
                  strokeWidth="1.3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.59"
                />
                <path
                  d="M107,0 L117,50"
                  stroke="#c8c8c8"
                  strokeWidth="1.0"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.56"
                />
                <path
                  d="M113,0 L123,50"
                  stroke="#d4d4d4"
                  strokeWidth="1.1"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.58"
                />
                <path
                  d="M3,8 L117,8"
                  stroke="#cccccc"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M5,14 L115,14"
                  stroke="#d0d0d0"
                  strokeWidth="0.7"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.48"
                />
                <path
                  d="M2,20 L118,20"
                  stroke="#c8c8c8"
                  strokeWidth="0.9"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.52"
                />
                <path
                  d="M4,26 L116,26"
                  stroke="#d4d4d4"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.49"
                />
                <path
                  d="M3,32 L117,32"
                  stroke="#cccccc"
                  strokeWidth="0.7"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.51"
                />
                <path
                  d="M5,38 L115,38"
                  stroke="#d0d0d0"
                  strokeWidth="0.9"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.48"
                />
                <path
                  d="M2,44 L118,44"
                  stroke="#c8c8c8"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M15,3 L15,47"
                  stroke="#d4d4d4"
                  strokeWidth="0.6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.45"
                />
                <path
                  d="M30,5 L30,45"
                  stroke="#c8c8c8"
                  strokeWidth="0.7"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.47"
                />
                <path
                  d="M45,2 L45,48"
                  stroke="#d0d0d0"
                  strokeWidth="0.6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.44"
                />
                <path
                  d="M60,4 L60,46"
                  stroke="#cccccc"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.46"
                />
                <path
                  d="M75,3 L75,47"
                  stroke="#d4d4d4"
                  strokeWidth="0.7"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.45"
                />
                <path
                  d="M90,5 L90,45"
                  stroke="#c8c8c8"
                  strokeWidth="0.6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.47"
                />
                <path
                  d="M105,2 L105,48"
                  stroke="#d0d0d0"
                  strokeWidth="0.7"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.44"
                />
                <path
                  d="M20,15 L35,18 L28,25 L40,22"
                  stroke="#cccccc"
                  strokeWidth="0.6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.4"
                />
                <path
                  d="M50,35 L65,32 L58,40 L70,38"
                  stroke="#d0d0d0"
                  strokeWidth="0.7"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.42"
                />
                <path
                  d="M80,10 L95,13 L88,20 L100,17"
                  stroke="#c8c8c8"
                  strokeWidth="0.6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.41"
                />
                <path
                  d="M10,30 L25,33 L18,40 L30,37"
                  stroke="#d4d4d4"
                  strokeWidth="0.7"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.43"
                />
                <path
                  d="M85,30 L100,28 L93,35 L105,32"
                  stroke="#cccccc"
                  strokeWidth="0.6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.4"
                />
                <path
                  d="M8,12 L12,16 L16,12 L12,8 Z"
                  fill="#d4d4d4"
                  opacity="0.35"
                />
                <path
                  d="M48,28 L52,32 L56,28 L52,24 Z"
                  fill="#c8c8c8"
                  opacity="0.37"
                />
                <path
                  d="M88,18 L92,22 L96,18 L92,14 Z"
                  fill="#d0d0d0"
                  opacity="0.34"
                />
                <path
                  d="M28,38 L32,42 L36,38 L32,34 Z"
                  fill="#cccccc"
                  opacity="0.36"
                />
                <path
                  d="M108,8 L112,12 L116,8 L112,4 Z"
                  fill="#d4d4d4"
                  opacity="0.33"
                />
                {[...Array(60)].map((_, i) => (
                  <circle
                    key={i}
                    cx={Math.random() * 120}
                    cy={Math.random() * 50}
                    r={Math.random() * 1.2 + 0.3}
                    fill="#d0d0d0"
                    opacity={Math.random() * 0.25 + 0.15}
                  />
                ))}
                <path
                  d="M0,0 L4,0 L4,50 L0,50 Z"
                  fill="#d4d4d4"
                  opacity="0.3"
                />
                <path
                  d="M116,0 L120,0 L120,50 L116,50 Z"
                  fill="#d4d4d4"
                  opacity="0.3"
                />
                <path
                  d="M0,0 L120,0 L120,3 L0,3 Z"
                  fill="#d0d0d0"
                  opacity="0.25"
                />
                <path
                  d="M0,47 L120,47 L120,50 L0,50 Z"
                  fill="#d0d0d0"
                  opacity="0.25"
                />
                <path
                  d="M2,6 L118,44"
                  stroke="#cccccc"
                  strokeWidth="0.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                <path
                  d="M5,6 L115,44"
                  stroke="#d0d0d0"
                  strokeWidth="0.6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.33"
                />
                <path
                  d="M8,6 L112,44"
                  stroke="#c8c8c8"
                  strokeWidth="0.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.34"
                />
                <path
                  d="M2,44 L118,6"
                  stroke="#d4d4d4"
                  strokeWidth="0.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                <path
                  d="M5,44 L115,6"
                  stroke="#cccccc"
                  strokeWidth="0.6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.33"
                />
                <path
                  d="M8,44 L112,6"
                  stroke="#d0d0d0"
                  strokeWidth="0.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.34"
                />
              </svg>
            )}
            {renderSticker(tab.id, activeTab === tab.id)}
          </button>
        ))}

        <svg
          className="tab-grid-line tab-grid-line-top"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          style={{ pointerEvents: 'none' }}
        >
          <path
            d="M2,3 Q25,1 50,4 Q75,6 98,2"
            stroke="#4a3b2c"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M2,5 Q25,3 50,6 Q75,8 98,4"
            stroke="#4a3b2c"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>

        <svg
          className="tab-grid-line tab-grid-line-bottom"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          style={{ pointerEvents: 'none' }}
        >
          <path
            d="M2,7 Q25,9 50,6 Q75,4 98,8"
            stroke="#4a3b2c"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M2,5 Q25,7 50,4 Q75,2 98,6"
            stroke="#4a3b2c"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>

        <svg
          className="tab-grid-line tab-grid-line-left"
          viewBox="0 0 10 100"
          preserveAspectRatio="none"
          style={{ pointerEvents: 'none' }}
        >
          <path
            d="M3,2 Q1,25 4,50 Q6,75 2,98"
            stroke="#4a3b2c"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M5,2 Q3,25 6,50 Q8,75 4,98"
            stroke="#4a3b2c"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>

        <svg
          className="tab-grid-line tab-grid-line-right"
          viewBox="0 0 10 100"
          preserveAspectRatio="none"
          style={{ pointerEvents: 'none' }}
        >
          <path
            d="M7,2 Q9,25 6,50 Q4,75 8,98"
            stroke="#4a3b2c"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M5,2 Q7,25 4,50 Q2,75 6,98"
            stroke="#4a3b2c"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>

        <svg
          className="tab-grid-line tab-grid-line-middle"
          viewBox="0 0 10 100"
          preserveAspectRatio="none"
          style={{ pointerEvents: 'none' }}
        >
          <path
            d="M5,0 Q3,25 6,50 Q8,75 4,100"
            stroke="#4a3b2c"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M7,0 Q5,25 8,50 Q10,75 6,100"
            stroke="#4a3b2c"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
};

export default Tab;
