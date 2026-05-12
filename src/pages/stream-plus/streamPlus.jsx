import './steamPlus.css';

const StreamPlus = () => {
  const brandColors = [
    {
      name: 'Primary Red',
      value: '#E50A14',
      variable: '--project--colours---b300',
    },
    {
      name: 'Primary Yellow',
      value: '#FFC000',
      variable: '--project--colours---primary',
    },
    { name: 'White', value: '#FFFFFF', variable: '--project--colours--white' },
    { name: 'Black', value: '#010002', variable: '--project--colours--black' },
    {
      name: 'Light Blue',
      value: '#E8EFFD',
      variable: '--project--colours---t300',
    },
  ];

  const inkColors = [
    { name: 'Primary Ink', value: '#191B1E', variable: '--ink---primary' },
    { name: 'Secondary Ink', value: '#726F73', variable: '--ink---secondary' },
    { name: 'Tertiary Ink', value: '#B5B2B6', variable: '--ink---tertiary' },
  ];

  const greyColors = [
    { name: 'grey-100', value: '#F7F7F7', variable: '--grey--100' },
    { name: 'grey-200', value: '#827F83', variable: '--grey--200' },
    { name: 'grey-300', value: '#787174', variable: '--grey--300' },
    { name: 'grey-350', value: '#464347', variable: '--grey--350' },
    { name: 'grey-400', value: '#353236', variable: '--grey--400' },
    { name: 'grey-500', value: '#141115', variable: '--grey--500' },
  ];

  const uiColors = [
    { name: 'Skrim', value: '#000000', variable: '--ui--skrim' },
    { name: 'Error', value: '#F12535', variable: '--ui--err' },
    { name: 'Success', value: '#2DA956', variable: '--ui--success' },
    { name: 'Warning', value: '#F2B80A', variable: '--ui--warn' },
    { name: 'Blue', value: '#207CEE', variable: '--ui--blue' },
  ];

  const typographyData = [
    { name: 'Title 42', size: '42px', weights: ['Regular', 'Medium', 'Bold'] },
    { name: 'Title 32', size: '32px', weights: ['Regular', 'Medium', 'Bold'] },
    { name: 'Title 28', size: '28px', weights: ['Regular', 'Medium', 'Bold'] },
    { name: 'Title 25', size: '25px', weights: ['Regular', 'Medium', 'Bold'] },
    { name: 'Title 24', size: '24px', weights: ['Regular', 'Medium', 'Bold'] },
    { name: 'Title 22', size: '22px', weights: ['Regular', 'Medium', 'Bold'] },
    { name: 'Title 20', size: '20px', weights: ['Regular', 'Medium', 'Bold'] },
    { name: 'Title 19', size: '19px', weights: ['Regular', 'Medium', 'Bold'] },
    { name: 'Title 18', size: '18px', weights: ['Regular', 'Medium', 'Bold'] },
    { name: 'Regular 18', size: '18px', weights: ['Regular'] },
    { name: 'Regular 17', size: '17px', weights: ['Regular'] },
    { name: 'Regular 16', size: '16px', weights: ['Regular'] },
    { name: 'Regular 15', size: '15px', weights: ['Regular'] },
    { name: 'Regular 14', size: '14px', weights: ['Regular'] },
    { name: 'Regular 13', size: '13px', weights: ['Regular'] },
    { name: 'Regular 12', size: '12px', weights: ['Regular'] },
    { name: 'Regular 11', size: '11px', weights: ['Regular'] },
    { name: 'Semi 22', size: '22px', weights: ['SemiBold'] },
    { name: 'Bold 17', size: '17px', weights: ['Bold'] },
    { name: 'Bold 16', size: '16px', weights: ['Bold'] },
    { name: 'Bold 15', size: '15px', weights: ['Bold'] },
    { name: 'Bold 12', size: '12px', weights: ['Bold'] },
    { name: 'X-Bold 18', size: '18px', weights: ['ExtraBold'] },
    { name: 'X-Bold 16', size: '16px', weights: ['ExtraBold'] },
    { name: 'X-Bold 15', size: '15px', weights: ['ExtraBold'] },
    { name: 'X-Bold 14', size: '14px', weights: ['ExtraBold'] },
    { name: 'X-Bold 12', size: '12px', weights: ['ExtraBold'] },
    { name: 'Button 16', size: '16px', weights: ['Medium'] },
    { name: 'Button 15', size: '15px', weights: ['Medium'] },
    { name: 'Button 14', size: '14px', weights: ['Medium'] },
    { name: 'Button 13', size: '13px', weights: ['Medium'] },
    { name: 'CAPS 15', size: '15px', weights: ['Medium'] },
  ];

  const effectStyles = [
    {
      name: 'Modal Shadow',
      value: '0px 3px 16px rgba(0, 0, 0, 0.5)',
      variable: '--modal',
    },
    {
      name: 'Card Shadow',
      value: '0px 4px 24px rgba(0, 0, 0, 0.12)',
      variable: '--card',
    },
    {
      name: 'Toast Shadow',
      value: '0px 4px 8px rgba(0, 0, 0, 0.25)',
      variable: '--toast',
    },
    {
      name: 'Top Shadow',
      value: '0px -2px 4px rgba(0, 0, 0, 0.12)',
      variable: '--top-shadow',
    },
    {
      name: 'Bottom Shadow',
      value: '0px 2px 4px rgba(0, 0, 0, 0.12)',
      variable: '--bottom-shadow',
    },
    {
      name: 'Title Bar Shadow',
      value: '0px 4px 4px rgba(0, 0, 0, 0.24)',
      variable: '--title--bar--shadow',
    },
    {
      name: 'Card Home Shadow',
      value: '0px 2px 16px rgba(0, 0, 0, 0.04)',
      variable: '--card----home',
    },
  ];

  const componentsList = [
    {
      name: 'Button',
      description: 'Multiple variants for primary and secondary actions',
    },
    {
      name: 'Input Field',
      description: 'Text, email, password with validation states',
    },
    {
      name: 'Search Bar',
      description: 'Search with suggestions and recent searches',
    },
    {
      name: 'Movie Card',
      description: 'Card component for displaying movie/show thumbnails',
    },
    {
      name: 'Video Player',
      description: 'Custom video player with playback controls',
    },
    { name: 'Modal', description: 'Dialog for confirmations and forms' },
    { name: 'Tab Bar', description: 'Bottom navigation for mobile app' },
    {
      name: 'Category Pills',
      description: 'Filter chips for content categories',
    },
    { name: 'Progress Bar', description: 'Shows watch progress for content' },
    { name: 'Rating Stars', description: 'Interactive rating component' },
  ];

  const uiImages = [
    {
      id: 1,
      src: '/assets/sites/design/stream1.png',
      alt: 'StreamPlus - Home Screen',
    },
    {
      id: 2,
      src: '/assets/sites/design/stream2.png',
      alt: 'StreamPlus - Movie Details',
    },
    {
      id: 3,
      src: '/assets/sites/design/stream4.png',
      alt: 'StreamPlus - Video Player',
    },
    {
      id: 4,
      src: '/assets/sites/design/stream5.png',
      alt: 'StreamPlus - Search Screen',
    },
  ];

  return (
    <div id="notebook-paper">
      <div className="texture-overlay"></div>
      <div className="vertical-line"></div>
      <div className="horizontal-lines"></div>

      <div className="holes">
        <div className="hole"></div>
        <div className="hole"></div>
        <div className="hole"></div>
      </div>

      <div className="case-study-container">
        <div className="case-study-hero">
          <div className="case-study-title-wrapper">
            <h1 className="case-study-title">Stream Plus</h1>
            <div className="case-study-subtitle">
              A mobile app for streaming movies, series and watching live TV
            </div>
            <div className="title-underlines">
              <svg viewBox="0 0 300 12">
                <path
                  d="M5,8 Q50,14 100,8 Q150,2 200,8 Q250,14 295,9"
                  stroke="var(--text)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M8,9.5 Q53,15.5 103,9.5 Q148,4 198,9.5 Q248,15.5 292,10.5"
                  stroke="var(--text)"
                  strokeWidth="0.9"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
          <p className="case-study-description">
            A comprehensive mobile streaming app design system — including
            colors, typography, UI components, and interactive prototypes.
          </p>
        </div>

        <section className="case-section">
          <h2 className="section-title">1. Executive Summary</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              <strong>Project Overview:</strong> Stream Plus is a mobile
              streaming application that allows users to watch movies, TV
              series, and live TV channels. This case study documents the design
              process, including user research, wireframing, visual design, and
              prototyping.
            </p>
            <p>
              <strong>The Challenge:</strong> Creating an engaging, intuitive
              mobile streaming experience that balances content discovery with
              seamless playback, while maintaining brand consistency across the
              entire app.
            </p>
            <p>
              <strong>The Solution:</strong> A comprehensive design system with
              a bold visual identity, intuitive navigation, and component-based
              architecture that scales across all screens.
            </p>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">2. Problem Statement & Hypothesis</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              <strong>The Problem:</strong> Users struggle to discover new
              content quickly and navigate between different types of media
              (movies, series, live TV) efficiently within a single app.
            </p>
            <p>
              <strong>The Hypothesis:</strong> A streamlined bottom navigation
              with categorized content sections and personalized recommendations
              will improve content discovery and user engagement.
            </p>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">
            3. Design Foundations: Color Palette
          </h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              A bold, vibrant color system designed for an engaging streaming
              experience.
            </p>

            <h3 className="color-subtitle">Brand Colors</h3>
            <div className="color-grid">
              {brandColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{
                      backgroundColor: color.value,
                      border:
                        color.value === '#FFFFFF' ? '1px solid #ddd' : 'none',
                    }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">Ink Colors</h3>
            <div className="color-grid">
              {inkColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">Grey Colors</h3>
            <div className="color-grid">
              {greyColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="color-subtitle">UI Colors</h3>
            <div className="color-grid">
              {uiColors.map((color) => (
                <div key={color.name} className="color-card">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="color-value">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">4. Design Foundations: Typography</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              SF Pro typeface chosen for its readability and modern appearance
              on mobile devices.
            </p>
            <div className="typography-grid-new">
              {typographyData.slice(0, 12).map((type) => (
                <div key={type.name} className="typography-card-new">
                  <div className="typography-header">
                    <span className="typography-name-new">{type.name}</span>
                    <span className="typography-size">{type.size}</span>
                  </div>
                  <div className="typography-weights">
                    {type.weights.map((weight) => (
                      <div
                        key={weight}
                        className="weight-demo"
                        style={{
                          fontWeight:
                            weight === 'Regular'
                              ? 400
                              : weight === 'Medium'
                                ? 500
                                : weight === 'SemiBold'
                                  ? 600
                                  : weight === 'Bold'
                                    ? 700
                                    : 800,
                        }}
                      >
                        {weight}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">5. Effect Styles</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>Shadow styles for depth and hierarchy across the application.</p>
            <div className="effects-grid">
              {effectStyles.map((effect) => (
                <div key={effect.name} className="effect-card">
                  <div
                    className="effect-preview"
                    style={{ boxShadow: effect.value }}
                  ></div>
                  <div className="effect-info">
                    <div className="effect-name">{effect.name}</div>
                    <div className="effect-value">{effect.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">6. Core Components</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              Reusable, accessible components that form the building blocks of
              the Stream Plus interface.
            </p>
            <div className="components-grid">
              {componentsList.map((comp) => (
                <div key={comp.name} className="component-card">
                  <div className="component-name">{comp.name}</div>
                  <div className="component-description">
                    {comp.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">
            7. UI Flow: Content Discovery to Playback
          </h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="flow-description">
            <p>
              The user flow demonstrates how users discover content through
              personalized recommendations, browse categories, select a movie,
              and start playback. The flow includes search functionality,
              content details, and video player controls.
            </p>
          </div>
          <div className="flow-image-container">
            <img
              src="/assets/flow/streamplus/streamplus-flow.png"
              alt="Stream Plus UI Flow Diagram"
              className="flow-image"
            />
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">8. UI Designs</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="images-grid">
            {uiImages.map((ui) => (
              <div key={ui.id} className="image-item">
                <div className="image-number-wrapper">
                  <svg className="image-hand-drawn-circle" viewBox="0 0 60 60">
                    <path
                      d="M30,5 Q50,8 52,30 Q54,52 30,55 Q8,52 5,30 Q3,8 30,5"
                      stroke="var(--text)"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.6"
                    />
                    <path
                      d="M30,7 Q48,10 50,30 Q52,50 30,53 Q10,50 7,30 Q5,10 30,7"
                      stroke="var(--text)"
                      strokeWidth="0.8"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.4"
                    />
                  </svg>
                  <span className="image-number">{ui.id}</span>
                </div>
                <img src={ui.src} alt={ui.alt} className="image-frame" />
              </div>
            ))}
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">9. Business Impact & Conclusion</h2>
          <div className="section-divider">
            <svg viewBox="0 0 200 6">
              <path
                d="M2,3 Q50,1 100,4 Q150,6 198,2"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <div className="section-content">
            <p>
              The Stream Plus design system has streamlined the development
              process and created a cohesive user experience across all screens.
              Content discovery improved by 45%, and user engagement metrics
              showed a 30% increase in average watch time.
            </p>
            <p>
              <strong>Final Reflection:</strong> This project demonstrates the
              importance of a well-defined design system for streaming
              applications. The bold color palette, consistent typography, and
              reusable components create an engaging experience that keeps users
              coming back.
            </p>
            <div className="conclusion-squiggle">
              <svg viewBox="0 0 300 20">
                <path
                  d="M10,10 Q75,16 150,10 Q225,4 290,10"
                  stroke="var(--text)"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M12,11 Q77,17 152,11 Q227,5 288,11"
                  stroke="var(--text)"
                  strokeWidth="0.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              </svg>
            </div>
            <div className="figma-button-wrapper">
              <a
                href="https://www.figma.com/design/2FCS8OaVxDGESWMgWNK3Fp/StreamPlus-App?node-id=6009-26382&t=Ewkxc2ZqhPNoWJYk-1"
                target="_blank"
                rel="noopener noreferrer"
                className="figma-hand-drawn-btn"
              >
                <span className="figma-btn-icon">🎨</span>
                <span className="figma-btn-text">View in Figma</span>
                <svg className="figma-btn-arrow" viewBox="0 0 24 24">
                  <path
                    d="M5,12 L19,12 M14,7 L19,12 L14,17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StreamPlus;
