import './devHero.css';

const DevHero = ({
  centerImage = '/assets/hero/dev-hero.png',
  className = '',
}) => {
  const stickers = [
    {
      src: '/assets/stickers/dev/500 ERROR.png',
      alt: '500 ERROR',
      top: 12,
      left: 8,
      rotate: 15,
      scale: 2.85,
      zIndex: 3,
    },
    {
      src: '/assets/stickers/dev/console.log().png',
      alt: 'console.log()',
      top: 85,
      left: 15,
      rotate: -25,
      scale: 1.9,
      zIndex: 5,
    },
    {
      src: '/assets/stickers/dev/Hello, World!.png',
      alt: 'Hello World',
      top: 20,
      left: 88,
      rotate: 45,
      scale: 1.8,
      zIndex: 2,
    },
    {
      src: '/assets/stickers/dev/laptop.png',
      alt: 'Laptop',
      top: 88,
      left: 75,
      rotate: -15,
      scale: 1.0,
      zIndex: 7,
    },
    {
      src: '/assets/stickers/dev/react.png',
      alt: 'React',
      top: 35,
      left: 92,
      rotate: 35,
      scale: 0.9,
      zIndex: 4,
    },
    {
      src: '/assets/stickers/dev/ship-fast.png',
      alt: 'Ship Fast',
      top: 65,
      left: 5,
      rotate: -45,
      scale: 0.95,
      zIndex: 6,
    },
    {
      src: '/assets/stickers/dev/vscode.png',
      alt: 'VS Code',
      top: 45,
      left: 85,
      rotate: 25,
      scale: 1.05,
      zIndex: 8,
    },
    {
      src: '/assets/stickers/design/V.4.png',
      alt: 'Hand',
      top: 75,
      left: 88,
      rotate: -35,
      scale: 0.88,
      zIndex: 1,
    },
    {
      src: '/assets/tools/dev/cloudfare.png',
      alt: 'Cloudflare',
      top: 15,
      left: 75,
      rotate: 55,
      scale: 0.92,
      zIndex: 9,
    },
    {
      src: '/assets/stickers/design/False.png',
      alt: 'False',
      top: 55,
      left: 92,
      rotate: -55,
      scale: 1.02,
      zIndex: 12,
    },
    {
      src: '/assets/stickers/design/True.png',
      alt: 'True',
      top: 30,
      left: 12,
      rotate: 10,
      scale: 0.78,
      zIndex: 10,
    },
    {
      src: '/assets/stickers/design/_.png',
      alt: 'Community Icon',
      top: 70,
      left: 15,
      rotate: -10,
      scale: 0.98,
      zIndex: 14,
    },
    {
      src: '/assets/tools/dev/typescript.png',
      alt: 'TypeScript',
      top: 8,
      left: 45,
      rotate: 30,
      scale: 1.08,
      zIndex: 11,
    },
    {
      src: '/assets/tools/dev/graphql.png',
      alt: 'GraphQL',
      top: 92,
      left: 50,
      rotate: -30,
      scale: 1.82,
      zIndex: 13,
    },
  ];

  return (
    <div className={`dev-hero ${className}`}>
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

export default DevHero;
