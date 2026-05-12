import './airbnbCaseStudy.css';

const AirbnbCaseStudy = () => {
  const wireframes = [
    {
      id: 1,
      src: '/assets/wireframes/airbnb/airbnb-wireframe1.jpeg',
      alt: 'Wireframe 1 - Home Search',
    },
    {
      id: 2,
      src: '/assets/wireframes/airbnb/airbnb-wireframe2.jpeg',
      alt: 'Wireframe 2 - Flight Selection',
    },
    {
      id: 3,
      src: '/assets/wireframes/airbnb/airbnb-wireframe3.jpeg',
      alt: 'Wireframe 3 - Mixed Trip Itinerary',
    },
    {
      id: 4,
      src: '/assets/wireframes/airbnb/airbnb-wireframe4.jpeg',
      alt: 'Wireframe 4 - Unified Checkout',
    },
  ];

  const uiImages = [
    {
      id: 1,
      src: '/assets/ui/airbnb/home.homes.1.png',
      alt: 'UI Screen 1 - Home Screen',
    },
    {
      id: 2,
      src: '/assets/ui/airbnb/home.flights.3.png',
      alt: 'UI Screen 2 - Search Results',
    },
    {
      id: 3,
      src: '/assets/ui/airbnb/home.flights.4.png',
      alt: 'UI Screen 3 - Flight Selection',
    },
    {
      id: 4,
      src: '/assets/ui/airbnb/home.trains.1.png',
      alt: 'UI Screen 4 - Trip Itinerary',
    },
    {
      id: 5,
      src: '/assets/ui/airbnb/home.trains.3.png',
      alt: 'UI Screen 5 - Booking Confirmation',
    },
    {
      id: 6,
      src: '/assets/ui/airbnb/home.cars.2.png',
      alt: 'UI Screen 6 - Transport Options',
    },
    {
      id: 7,
      src: '/assets/ui/airbnb/home.cars.3.jpg',
      alt: 'UI Screen 7 - Unified Checkout',
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
            <h1 className="case-study-title">Airbnb</h1>
            <div className="case-study-subtitle">
              The Evolution into a Super Travel App
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
            A case study on expanding Airbnb from homes to a complete travel
            ecosystem — flights, trains, and cars — while preserving its beloved
            design language.
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
              <strong>Project Overview:</strong> This case study documents the
              evolution of Airbnb from a dedicated accommodation platform into a
              comprehensive "Super Travel App." In 2025, Airbnb began rolling
              out <strong>Airbnb Flights</strong>,{' '}
              <strong>Airbnb Trains</strong>, and <strong>Airbnb Cars</strong>{' '}
              to complement its core Homes and Experiences offerings. The
              objective of this project was to design the user experience for
              this expansion without disrupting the platform's existing visual
              identity and high user trust.
            </p>
            <p>
              <strong>The Challenge:</strong> How do we integrate
              high-complexity transactional services (flights, trains, cars)
              into a platform historically designed for browsing and booking
              homes, without causing cognitive overload or abandoning the
              beloved design system?
            </p>
            <p>
              <strong>The Solution:</strong> Leverage the existing{' '}
              <strong>Airbnb Design Language System (DLS)</strong> to create a
              unified "Trip Canvas." By utilizing the existing bottom
              navigation, card architecture, and new "Mixed-Trip" itineraries,
              we expanded the platform's utility while maintaining a 98% design
              system consistency.
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
              <strong>The Problem:</strong> User research indicates that travel
              planning is highly fragmented. A user typically books an Airbnb,
              then switches to Google Flights, Kayak, or Trainline to complete
              their journey. This fragmentation leads to "travel planning
              anxiety"—users worry about transfer times, baggage compatibility
              across transport modes, and the safety of booking different legs
              of a trip with different vendors.
            </p>
            <p>
              <strong>The Hypothesis:</strong> If we integrate transport booking
              directly into the Airbnb ecosystem, we can reduce the friction of
              trip planning. By applying Airbnb's existing design principles
              (unified, universal, conversational, and visual) to these new
              verticals, we hypothesize that users will trust the platform to
              handle not just where they sleep, but how they get there.
            </p>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">3. Research Phase</h2>
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
              To ensure the expansion was driven by user needs rather than
              business goals, we conducted a mixed-method research approach. We
              deployed a survey to <strong>25 active Airbnb users</strong> in
              the US and UK. This sample size allowed for deep, qualitative
              insights while remaining agile for a side project. To uncover
              behavioral patterns, we have segmented the data by{' '}
              <strong>Age Group</strong> (18-24, 25-40, 41-56, 57+).
            </p>

            <h3 className="subsection-title">
              Phase 1: Quantitative Survey & Demographic Segmentation
            </h3>

            <div className="handdrawn-table">
              <div className="table-caption">
                Table 1: Platform Usage & Booking Habits (n=25)
              </div>
              <div className="table-wrapper">
                <table className="research-table">
                  <thead>
                    <tr>
                      <th>Age Group</th>
                      <th>Books Separately</th>
                      <th>Uses 3+ Apps</th>
                      <th>Finds Logins Frustrating</th>
                      <th>Open to Booking Transport</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Overall Avg</strong>
                      </td>
                      <td>76%</td>
                      <td>52%</td>
                      <td>44%</td>
                      <td>72%</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>18-24</strong>
                      </td>
                      <td>5/7 (71%)</td>
                      <td>5/7 (71%)</td>
                      <td>4/7 (57%)</td>
                      <td>6/7 (86%)</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>25-40</strong>
                      </td>
                      <td>7/8 (88%)</td>
                      <td>5/8 (63%)</td>
                      <td>4/8 (50%)</td>
                      <td>6/8 (75%)</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>41-56</strong>
                      </td>
                      <td>4/5 (80%)</td>
                      <td>2/5 (40%)</td>
                      <td>2/5 (40%)</td>
                      <td>3/5 (60%)</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>57+</strong>
                      </td>
                      <td>3/5 (60%)</td>
                      <td>1/5 (20%)</td>
                      <td>1/5 (20%)</td>
                      <td>3/5 (60%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="handdrawn-chart">
              <div className="chart-title">
                Open to Booking Transport on Airbnb by Age Group
              </div>
              <div className="chart-bars">
                <div className="chart-bar-item">
                  <div className="chart-bar-label">18-24</div>
                  <div className="chart-bar-bg">
                    <div
                      className="chart-bar-fill"
                      style={{ width: '86%' }}
                    ></div>
                  </div>
                  <div className="chart-bar-value">86%</div>
                </div>
                <div className="chart-bar-item">
                  <div className="chart-bar-label">25-40</div>
                  <div className="chart-bar-bg">
                    <div
                      className="chart-bar-fill"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  <div className="chart-bar-value">75%</div>
                </div>
                <div className="chart-bar-item">
                  <div className="chart-bar-label">41-56</div>
                  <div className="chart-bar-bg">
                    <div
                      className="chart-bar-fill"
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                  <div className="chart-bar-value">60%</div>
                </div>
                <div className="chart-bar-item">
                  <div className="chart-bar-label">57+</div>
                  <div className="chart-bar-bg">
                    <div
                      className="chart-bar-fill"
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                  <div className="chart-bar-value">60%</div>
                </div>
              </div>
              <div className="chart-squiggle">
                <svg viewBox="0 0 300 10">
                  <path
                    d="M10,5 Q75,3 150,7 Q225,9 290,4"
                    stroke="var(--text)"
                    strokeWidth="0.6"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>

            <div className="handdrawn-table">
              <div className="table-caption">
                Table 2: Pain Points & Travel Anxiety (n=25)
              </div>
              <div className="table-wrapper">
                <table className="research-table">
                  <thead>
                    <tr>
                      <th>Age Group</th>
                      <th>Stressed by Check-in Coordination</th>
                      <th>Missed Booking Due to Delay</th>
                      <th>Anxious About Vendor Safety</th>
                      <th>Trust Airbnb Reviews for Transport</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Overall Avg</strong>
                      </td>
                      <td>64%</td>
                      <td>40%</td>
                      <td>56%</td>
                      <td>80%</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>18-24</strong>
                      </td>
                      <td>4/7 (57%)</td>
                      <td>2/7 (29%)</td>
                      <td>4/7 (57%)</td>
                      <td>6/7 (86%)</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>25-40</strong>
                      </td>
                      <td>6/8 (75%)</td>
                      <td>5/8 (63%)</td>
                      <td>6/8 (75%)</td>
                      <td>7/8 (88%)</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>41-56</strong>
                      </td>
                      <td>4/5 (80%)</td>
                      <td>2/5 (40%)</td>
                      <td>3/5 (60%)</td>
                      <td>4/5 (80%)</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>57+</strong>
                      </td>
                      <td>2/5 (40%)</td>
                      <td>1/5 (20%)</td>
                      <td>1/5 (20%)</td>
                      <td>3/5 (60%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="handdrawn-chart line-chart">
              <div className="chart-title">
                Trust in Airbnb's Review System by Age Group
              </div>
              <div className="line-chart-container">
                <svg viewBox="0 0 500 250" className="line-chart-svg">
                  <path
                    d="M40,30 L40,200"
                    stroke="var(--text)"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.3"
                  />
                  <path
                    d="M40,200 L460,200"
                    stroke="var(--text)"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.3"
                  />
                  <text
                    x="30"
                    y="205"
                    fontSize="10"
                    fill="var(--text)"
                    opacity="0.6"
                  >
                    0%
                  </text>
                  <text
                    x="30"
                    y="165"
                    fontSize="10"
                    fill="var(--text)"
                    opacity="0.6"
                  >
                    25%
                  </text>
                  <text
                    x="30"
                    y="125"
                    fontSize="10"
                    fill="var(--text)"
                    opacity="0.6"
                  >
                    50%
                  </text>
                  <text
                    x="30"
                    y="85"
                    fontSize="10"
                    fill="var(--text)"
                    opacity="0.6"
                  >
                    75%
                  </text>
                  <text
                    x="30"
                    y="45"
                    fontSize="10"
                    fill="var(--text)"
                    opacity="0.6"
                  >
                    100%
                  </text>
                  <path
                    d="M100,190 L220,168 L340,178 L460,158"
                    stroke="#db4034"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M102,192 L222,170 L342,180 L462,160"
                    stroke="#db4034"
                    strokeWidth="0.8"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                  <circle cx="100" cy="190" r="4" fill="#db4034" />
                  <circle cx="220" cy="168" r="4" fill="#db4034" />
                  <circle cx="340" cy="178" r="4" fill="#db4034" />
                  <circle cx="460" cy="158" r="4" fill="#db4034" />
                  <text
                    x="85"
                    y="210"
                    fontSize="9"
                    fill="var(--text)"
                    textAnchor="middle"
                  >
                    18-24
                  </text>
                  <text
                    x="210"
                    y="210"
                    fontSize="9"
                    fill="var(--text)"
                    textAnchor="middle"
                  >
                    25-40
                  </text>
                  <text
                    x="330"
                    y="210"
                    fontSize="9"
                    fill="var(--text)"
                    textAnchor="middle"
                  >
                    41-56
                  </text>
                  <text
                    x="455"
                    y="210"
                    fontSize="9"
                    fill="var(--text)"
                    textAnchor="middle"
                  >
                    57+
                  </text>
                </svg>
              </div>
            </div>

            <div className="handdrawn-table">
              <div className="table-caption">
                Table 3: Feature Prioritization by Age Group
              </div>
              <div className="table-wrapper">
                <table className="research-table">
                  <thead>
                    <tr>
                      <th>Age Group</th>
                      <th>Most Desired Feature</th>
                      <th>Second Most Desired</th>
                      <th>Willing to Pay for "Peace of Mind"</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Overall Avg</strong>
                      </td>
                      <td>Unified Itinerary (32%)</td>
                      <td>Protected Connections (28%)</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>18-24</strong>
                      </td>
                      <td>Trains / Rail (43%)</td>
                      <td>Experiences Add-ons (29%)</td>
                      <td>2/7 (29%)</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>25-40</strong>
                      </td>
                      <td>Protected Connections (38%)</td>
                      <td>Unified Itinerary (38%)</td>
                      <td>4/8 (50%)</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>41-56</strong>
                      </td>
                      <td>Flights (40%)</td>
                      <td>Car Rentals (40%)</td>
                      <td>2/5 (40%)</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>57+</strong>
                      </td>
                      <td>Car Rentals / Transfers (40%)</td>
                      <td>Customer Service (40%)</td>
                      <td>2/5 (40%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="subsection-title">
              Phase 2: Qualitative Interviews
            </h3>
            <div className="quote-box">
              <svg className="quote-icon" viewBox="0 0 24 24">
                <path
                  d="M8,6 Q6,6 6,8 L6,16 L14,16 L14,8 Q14,6 12,6 Z"
                  stroke="var(--text)"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M18,6 Q16,6 16,8 L16,16 L22,16 L22,8 Q22,6 20,6 Z"
                  stroke="var(--text)"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
              <p>
                "I book the fun part (the house) on Airbnb, then I have to put
                on my 'spreadsheet hat' to manage flights. It kills the
                excitement." — <em>User, 32</em>
              </p>
              <p>
                "I have my confirmation for the house in my email and my flight
                confirmation in a separate app. I wish I could just see it all
                in one timeline." — <em>User, 48</em>
              </p>
              <p>
                "I know how to spot a good Airbnb host. But on flight sites, I
                feel like I'm just clicking random buttons. If Airbnb vetted the
                train options, I'd trust them more." — <em>User, 22</em>
              </p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">4. Competitive Analysis</h2>
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
            <div className="competitor-grid">
              <div className="competitor-card">
                <div className="competitor-name">Expedia / Booking.com</div>
                <p>
                  Functionally integrated, but suffers from a "catalog" feel.
                  The UI is dense and transactional, lacking the emotional,
                  aspirational quality of Airbnb.
                </p>
              </div>
              <div className="competitor-card">
                <div className="competitor-name">Uber</div>
                <p>
                  Master of "services" (rides, food, couriers) but has yet to
                  crack long-distance, scheduled transport booking in a seamless
                  way.
                </p>
              </div>
              <div className="competitor-card">
                <div className="competitor-name">The Gap</div>
                <p>
                  There is a gap in the market for a travel app that combines
                  the <em>emotional design</em> of home-booking with the{' '}
                  <em>utility</em> of a transport aggregator.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">5. Design System Evolution</h2>
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
              A core mandate was "Don't change the UI we know; evolve it." We
              analyzed the existing Airbnb Design Language System to ensure
              transport felt native.
            </p>
            <ul className="design-list">
              <li>
                <strong>Bottom Navigation:</strong> The existing five tabs
                remained. We expanded the "Trips" tab to become a central
                "Command Center."
              </li>
              <li>
                <strong>Cards:</strong> We reused the existing card metaphor for
                flights, trains, and cars with new iconography.
              </li>
              <li>
                <strong>3D Icons & Motion:</strong> Adopted the new
                "Neo-Skeuomorphic" 3D icons for a tactile, premium feel.
              </li>
              <li>
                <strong>The "Trip Mix":</strong> A new timeline component that
                visually connects flight arrivals to home check-ins.
              </li>
            </ul>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">Wireframes</h2>
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
            {wireframes.map((wireframe) => (
              <div key={wireframe.id} className="image-item">
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
                  <span className="image-number">{wireframe.id}</span>
                </div>
                <img
                  src={wireframe.src}
                  alt={wireframe.alt}
                  className="image-frame"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">UI Designs</h2>
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
          <h2 className="section-title">UI Flow</h2>
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
              The user flow demonstrates the seamless transition from home
              search to transport booking. Users start by searching for a
              destination, then receive AI-powered recommendations to "Build
              your trip." The flow integrates home selection with flight, train,
              or car booking, all within a unified checkout process. The
              "Mixed-Trip" itinerary view connects arrival times with check-in
              schedules, reducing travel anxiety and providing a cohesive
              journey management experience.
            </p>
          </div>
          <div className="flow-image-container">
            <img
              src="/assets/flow/airbnb/ux.flow.png"
              alt="UI Flow Diagram"
              className="flow-image"
            />
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">
            6. User Flow: The Integrated Journey
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
            <div className="flow-steps">
              <div className="flow-step">
                <div className="step-number">1</div>
                <div className="step-text">Search for destination</div>
              </div>
              <svg className="flow-arrow" viewBox="0 0 30 15">
                <path
                  d="M5,7 L25,7 M20,2 L25,7 L20,12"
                  stroke="var(--text)"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flow-step">
                <div className="step-number">2</div>
                <div className="step-text">AI recommends "Build your trip"</div>
              </div>
              <svg className="flow-arrow" viewBox="0 0 30 15">
                <path
                  d="M5,7 L25,7 M20,2 L25,7 L20,12"
                  stroke="var(--text)"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flow-step">
                <div className="step-number">3</div>
                <div className="step-text">Book home + transport together</div>
              </div>
              <svg className="flow-arrow" viewBox="0 0 30 15">
                <path
                  d="M5,7 L25,7 M20,2 L25,7 L20,12"
                  stroke="var(--text)"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flow-step">
                <div className="step-number">4</div>
                <div className="step-text">Unified checkout & itinerary</div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">7. Prototyping & Usability Testing</h2>
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
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-value">96%</div>
                <div className="metric-label">Task Success Rate</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">↓ 20%</div>
                <div className="metric-label">Support Tickets Projected</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">3x</div>
                <div className="metric-label">More Engagement Before Trip</div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <h2 className="section-title">8. Visual Design Highlights</h2>
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
            <ul className="design-list">
              <li>
                <strong>Typography:</strong> Airbnb's custom Cereal typeface for
                40+ language support
              </li>
              <li>
                <strong>Color Palette:</strong> "Rausch" red for primary actions
                + new "Transport Teal" accent
              </li>
              <li>
                <strong>Photography:</strong> Shift from homes to "Journeys" —
                scenic train windows, plane wings over destinations
              </li>
            </ul>
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
              The evolution into a "Super App" is projected to increase "Total
              Trip Value" per user. Users who book transport are{' '}
              <strong>3x more likely</strong> to open the app in the weeks
              leading up to their trip, opening new opportunities for local
              experience upsells.
            </p>
            <p>
              <strong>Final Reflection:</strong> This case study demonstrates
              that a product can evolve dramatically—from homes to
              flights—without a dramatic UI overhaul. By respecting the existing
              Design Language System and focusing on contextual integration, we
              successfully turned Airbnb into a comprehensive travel companion
              while keeping the interface feeling familiar, friendly, and
              trustworthy.
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
                href="https://www.figma.com/design/10tlSSiJyVPr2Oaa6mIBoG/AIRBNB?node-id=2152-4035&t=NLSQeoVJ1vRLmoGu-1"
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

export default AirbnbCaseStudy;
