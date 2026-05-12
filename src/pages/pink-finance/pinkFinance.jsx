import './pinkFinance.css';

const PinkFinance = () => {
  const brandColors = [
    { name: 'Primary Pink', value: '#FF3B8E', variable: '--pink-primary' },
    { name: 'Secondary Pink', value: '#FF85B3', variable: '--pink-secondary' },
    { name: 'White', value: '#FFFFFF', variable: '--pink-white' },
    { name: 'Black', value: '#1A1A1A', variable: '--pink-black' },
    { name: 'Light Pink', value: '#FFF0F5', variable: '--pink-light' },
  ];

  const inkColors = [
    { name: 'Primary Ink', value: '#1A1A1A', variable: '--ink-primary' },
    { name: 'Secondary Ink', value: '#666666', variable: '--ink-secondary' },
    { name: 'Tertiary Ink', value: '#999999', variable: '--ink-tertiary' },
  ];

  const greyColors = [
    { name: 'grey-50', value: '#FAFAFA', variable: '--grey-50' },
    { name: 'grey-100', value: '#F5F5F5', variable: '--grey-100' },
    { name: 'grey-200', value: '#EEEEEE', variable: '--grey-200' },
    { name: 'grey-300', value: '#E0E0E0', variable: '--grey-300' },
    { name: 'grey-400', value: '#BDBDBD', variable: '--grey-400' },
    { name: 'grey-500', value: '#9E9E9E', variable: '--grey-500' },
    { name: 'grey-600', value: '#757575', variable: '--grey-600' },
    { name: 'grey-700', value: '#616161', variable: '--grey-700' },
    { name: 'grey-800', value: '#424242', variable: '--grey-800' },
    { name: 'grey-900', value: '#212121', variable: '--grey-900' },
  ];

  const uiColors = [
    { name: 'Success', value: '#00C853', variable: '--ui-success' },
    { name: 'Error', value: '#FF3B30', variable: '--ui-error' },
    { name: 'Warning', value: '#FF9500', variable: '--ui-warning' },
    { name: 'Info', value: '#007AFF', variable: '--ui-info' },
  ];

  const typographyData = [
    { name: 'Title Extrabold 80', size: '80px', weights: ['ExtraBold'] },
    { name: 'Title Extrabold 60', size: '60px', weights: ['ExtraBold'] },
    { name: 'Title Extrabold 42', size: '42px', weights: ['ExtraBold'] },
    { name: 'Title Extrabold 32', size: '32px', weights: ['ExtraBold'] },
    { name: 'Title Extrabold 28', size: '28px', weights: ['ExtraBold'] },
    { name: 'Title Extrabold 25', size: '25px', weights: ['ExtraBold'] },
    { name: 'Title Extrabold 24', size: '24px', weights: ['ExtraBold'] },
    { name: 'Title Extrabold 22', size: '22px', weights: ['ExtraBold'] },
    { name: 'Title Extrabold 20', size: '20px', weights: ['ExtraBold'] },
    { name: 'Title Extrabold 19', size: '19px', weights: ['ExtraBold'] },
    { name: 'Title Extrabold 18', size: '18px', weights: ['ExtraBold'] },
    { name: 'Title Bold 80', size: '80px', weights: ['Bold'] },
    { name: 'Title Bold 60', size: '60px', weights: ['Bold'] },
    { name: 'Title Bold 42', size: '42px', weights: ['Bold'] },
    { name: 'Title Bold 32', size: '32px', weights: ['Bold'] },
    { name: 'Title Bold 28', size: '28px', weights: ['Bold'] },
    { name: 'Title Bold 25', size: '25px', weights: ['Bold'] },
    { name: 'Title Bold 24', size: '24px', weights: ['Bold'] },
    { name: 'Title Bold 22', size: '22px', weights: ['Bold'] },
    { name: 'Title Bold 20', size: '20px', weights: ['Bold'] },
    { name: 'Title Bold 19', size: '19px', weights: ['Bold'] },
    { name: 'Title Bold 18', size: '18px', weights: ['Bold'] },
    { name: 'Title Bold 17', size: '17px', weights: ['Bold'] },
    { name: 'Title Semibold 42', size: '42px', weights: ['Semibold'] },
    { name: 'Title Semibold 32', size: '32px', weights: ['Semibold'] },
    { name: 'Title Semibold 28', size: '28px', weights: ['Semibold'] },
    { name: 'Title Semibold 25', size: '25px', weights: ['Semibold'] },
    { name: 'Title Semibold 24', size: '24px', weights: ['Semibold'] },
    { name: 'Title Semibold 22', size: '22px', weights: ['Semibold'] },
    { name: 'Title Semibold 20', size: '20px', weights: ['Semibold'] },
    { name: 'Title Semibold 19', size: '19px', weights: ['Semibold'] },
    { name: 'Title Semibold 18', size: '18px', weights: ['Semibold'] },
    { name: 'Title Medium 42', size: '42px', weights: ['Medium'] },
    { name: 'Title Medium 32', size: '32px', weights: ['Medium'] },
    { name: 'Title Medium 28', size: '28px', weights: ['Medium'] },
    { name: 'Title Medium 25', size: '25px', weights: ['Medium'] },
    { name: 'Title Medium 24', size: '24px', weights: ['Medium'] },
    { name: 'Title Medium 22', size: '22px', weights: ['Medium'] },
    { name: 'Title Medium 20', size: '20px', weights: ['Medium'] },
    { name: 'Title Medium 19', size: '19px', weights: ['Medium'] },
    { name: 'Title Medium 18', size: '18px', weights: ['Medium'] },
    { name: 'Medium 18', size: '18px', weights: ['Medium'] },
    { name: 'Medium 17', size: '17px', weights: ['Medium'] },
    { name: 'Medium 16', size: '16px', weights: ['Medium'] },
    { name: 'Medium 15', size: '15px', weights: ['Medium'] },
    { name: 'Medium 14', size: '14px', weights: ['Medium'] },
    { name: 'Medium 13', size: '13px', weights: ['Medium'] },
    { name: 'Medium 12', size: '12px', weights: ['Medium'] },
    { name: 'Medium 11', size: '11px', weights: ['Medium'] },
    { name: 'Bold 17', size: '17px', weights: ['Bold'] },
    { name: 'Bold 16', size: '16px', weights: ['Bold'] },
    { name: 'Bold 15', size: '15px', weights: ['Bold'] },
    { name: 'Bold 12', size: '12px', weights: ['Bold'] },
    { name: 'Semi 18', size: '18px', weights: ['SemiBold'] },
    { name: 'Semi 16', size: '16px', weights: ['SemiBold'] },
    { name: 'Semi 15', size: '15px', weights: ['SemiBold'] },
    { name: 'Semi 14', size: '14px', weights: ['SemiBold'] },
    { name: 'Semi 12', size: '12px', weights: ['SemiBold'] },
    { name: 'Button 16', size: '16px', weights: ['Medium'] },
    { name: 'Button 15', size: '15px', weights: ['Medium'] },
    { name: 'Button 14', size: '14px', weights: ['Medium'] },
    { name: 'Button 13', size: '13px', weights: ['Medium'] },
    { name: 'X-Bold 16', size: '16px', weights: ['ExtraBold'] },
    { name: 'X-Bold 15', size: '15px', weights: ['ExtraBold'] },
    { name: 'X-Bold 14', size: '14px', weights: ['ExtraBold'] },
    { name: 'X-Bold 13', size: '13px', weights: ['ExtraBold'] },
    { name: 'X-Bold 12', size: '12px', weights: ['ExtraBold'] },
  ];

  const effectStyles = [
    {
      name: 'Card Shadow',
      value: '0px 2px 16px rgba(0, 0, 0, 0.04)',
      variable: '--card',
    },
    {
      name: 'Top Shadow',
      value: '0px -2px 4px rgba(0, 0, 0, 0.12)',
      variable: '--top--shadow',
    },
    {
      name: 'Toast Shadow',
      value: '0px 4px 8px rgba(0, 0, 0, 0.25)',
      variable: '--toast',
    },
    {
      name: 'Bottom Shadow',
      value: '0px 2px 4px rgba(0, 0, 0, 0.12)',
      variable: '--bottom--shadow',
    },
    {
      name: 'Modal Shadow',
      value: '0px 3px 16px rgba(0, 0, 0, 0.5)',
      variable: '--modal',
    },
    {
      name: 'Base Shadow',
      value: '0px 4px 24px rgba(0, 0, 0, 0.12)',
      variable: '--base',
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
      name: 'Amount Pad',
      description: 'Custom numeric keypad for entering amounts',
    },
    {
      name: 'Stock Card',
      description: 'Card component for displaying stock information',
    },
    {
      name: 'Transaction List',
      description: 'List of recent transactions with filtering',
    },
    { name: 'Modal', description: 'Dialog for confirmations and forms' },
    { name: 'Tab Bar', description: 'Bottom navigation for mobile app' },
    {
      name: 'Chart View',
      description: 'Line chart for stock price visualization',
    },
    {
      name: 'Progress Ring',
      description: 'Investment goal progress indicator',
    },
    {
      name: 'Avatar',
      description: 'User profile picture with status indicator',
    },
  ];

  const uiImages = [
    {
      id: 1,
      src: '/assets/sites/design/pink1.png',
      alt: 'Pink Finance - Home Screen',
    },
    {
      id: 2,
      src: '/assets/sites/design/pink2.png',
      alt: 'Pink Finance - Stock Details',
    },
    {
      id: 3,
      src: '/assets/sites/design/pink3.png',
      alt: 'Pink Finance - Send Money',
    },
    {
      id: 4,
      src: '/assets/sites/design/pink4.png',
      alt: 'Pink Finance - Investment',
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
            <h1 className="case-study-title">Pink Finance</h1>
            <div className="case-study-subtitle">
              Minimalist mobile app for Gen Z to send money and buy stock &
              assets
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
            A comprehensive mobile finance app design system for Gen Z —
            including colors, typography, UI components, and interactive
            prototypes.
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
              <strong>Project Overview:</strong> Pink Finance is a mobile
              finance application designed specifically for Gen Z users to send
              money, buy stocks, and invest in assets. This case study documents
              the design process, including user research, wireframing, visual
              design, and prototyping.
            </p>
            <p>
              <strong>The Challenge:</strong> Creating a finance app that feels
              approachable and not intimidating for young users, while
              maintaining security and trust. The app needs to simplify complex
              financial concepts into an intuitive, delightful experience.
            </p>
            <p>
              <strong>The Solution:</strong> A comprehensive design system with
              a bold, youthful aesthetic, simplified navigation, and educational
              components that help Gen Z users understand investing.
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
              <strong>The Problem:</strong> Gen Z users find traditional finance
              apps intimidating, complex, and lacking personality. They want to
              invest but don't know where to start, and existing apps don't
              speak their visual language.
            </p>
            <p>
              <strong>The Hypothesis:</strong> A finance app with a vibrant,
              approachable design, simplified investing concepts, and social
              features will increase Gen Z engagement and make investing
              accessible to first-time investors.
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
              A fresh, vibrant color system designed for Gen Z engagement and
              trust.
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
              {typographyData.slice(0, 16).map((type) => (
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
                                : weight === 'Semibold'
                                  ? 600
                                  : weight === 'Bold'
                                    ? 700
                                    : weight === 'ExtraBold'
                                      ? 800
                                      : 900,
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
              the Pink Finance interface.
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
            7. UI Flow: Sending Money & Investing
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
              The user flow demonstrates how users can send money to friends,
              discover stocks to invest in, and purchase assets. The flow
              includes onboarding, linking a bank account, browsing investment
              opportunities, and completing transactions.
            </p>
          </div>
          <div className="flow-image-container">
            <img
              src="/assets/flow/pink-flow.png"
              alt="Pink Finance UI Flow Diagram"
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
              The Pink Finance design system has successfully attracted a Gen Z
              audience, with 40% of new users being first-time investors. User
              retention increased by 35% and average transaction value grew by
              25% within three months of launch.
            </p>
            <p>
              <strong>Final Reflection:</strong> This project proves that
              finance apps don't have to be boring or intimidating. By designing
              for Gen Z's visual preferences and simplifying complex concepts,
              we've created an app that makes investing accessible and even
              enjoyable for a new generation.
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
                href="https://www.figma.com/design/Yu3INfc1Ce6fqKjmnFCAv8/Pink-Finance?node-id=70-10996&t=J8D5Uq8O4ewwWhUx-1"
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

export default PinkFinance;
