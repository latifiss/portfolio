import './designHero.css';

const DesignHero = ({
  centerImage = '/assets/hero/design-hero.png',
  className = '',
}) => {
  const stickers = [
    {
      src: '/assets/stickers/design/Auto Layout.png',
      alt: 'Auto Layout',
      top: 12,
      left: 8,
      rotate: 15,
      scale: 0.85,
      zIndex: 3,
    },
    {
      src: '/assets/stickers/design/@.png',
      alt: 'At Sign',
      top: 85,
      left: 15,
      rotate: -25,
      scale: 0.9,
      zIndex: 5,
    },
    {
      src: '/assets/stickers/design/_.png',
      alt: 'Underscore',
      top: 20,
      left: 88,
      rotate: 45,
      scale: 0.8,
      zIndex: 2,
    },
    {
      src: '/assets/stickers/design/A_.png',
      alt: 'A Underscore',
      top: 88,
      left: 75,
      rotate: -15,
      scale: 1.0,
      zIndex: 7,
    },
    {
      src: '/assets/stickers/design/Checkbox.png',
      alt: 'Checkbox',
      top: 35,
      left: 92,
      rotate: 35,
      scale: 0.9,
      zIndex: 4,
    },
    {
      src: '/assets/stickers/design/Component.png',
      alt: 'Component',
      top: 65,
      left: 5,
      rotate: -45,
      scale: 0.95,
      zIndex: 6,
    },
    {
      src: '/assets/stickers/design/HandOff.png',
      alt: 'HandOff',
      top: 45,
      left: 85,
      rotate: 25,
      scale: 1.05,
      zIndex: 8,
    },
    {
      src: '/assets/stickers/design/Mobile First.png',
      alt: 'Mobile First',
      top: 75,
      left: 88,
      rotate: -35,
      scale: 0.88,
      zIndex: 1,
    },
    {
      src: '/assets/stickers/design/Tool Box Sticker.png',
      alt: 'Tool Box Sticker',
      top: 15,
      left: 75,
      rotate: 55,
      scale: 0.92,
      zIndex: 9,
    },
    {
      src: '/assets/stickers/design/Publish Button.png',
      alt: 'Publish Button',
      top: 55,
      left: 92,
      rotate: -55,
      scale: 1.02,
      zIndex: 12,
    },
    {
      src: '/assets/stickers/design/Dev Mode Switch.png',
      alt: 'Dev Mode Switch',
      top: 30,
      left: 12,
      rotate: 10,
      scale: 0.78,
      zIndex: 10,
    },
    {
      src: '/assets/stickers/design/Untitled.png',
      alt: 'Untitled',
      top: 70,
      left: 15,
      rotate: -10,
      scale: 0.98,
      zIndex: 14,
    },
    {
      src: '/assets/stickers/design/Pen Tooled Like.png',
      alt: 'Pen Tooled Like',
      top: 8,
      left: 45,
      rotate: 30,
      scale: 1.08,
      zIndex: 11,
    },
    {
      src: '/assets/stickers/design/Pixelated Heart.png',
      alt: 'Pixelated Heart',
      top: 92,
      left: 50,
      rotate: -30,
      scale: 0.82,
      zIndex: 13,
    },
  ];

  return (
    <div className={`design-hero ${className}`}>
      <div className="hero-container">
        <div className="hero-center">
          <img
            src={centerImage}
            alt="Hero Center"
            className="hero-center-image"
          />
        </div>

        {stickers.map((sticker, index) => (
          <div
            key={index}
            className="hero-sticker"
            style={{
              top: `${sticker.top}%`,
              left: `${sticker.left}%`,
              transform: `rotate(${sticker.rotate}deg) scale(${sticker.scale})`,
              zIndex: sticker.zIndex,
            }}
          >
            <img
              src={sticker.src}
              alt={sticker.alt}
              className="sticker-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignHero;
