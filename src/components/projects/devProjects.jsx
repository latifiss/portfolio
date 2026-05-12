import './devProjects.css';

const DevProject = ({ projects }) => {
  return (
    <div className="dev-grid-container">
      <div className="dev-excel-grid">
        <div className="dev-grid-cell">
          <div className="dev-cell-content">
            <div className="dev-project-number-wrapper">
              <svg className="dev-hand-drawn-circle" viewBox="0 0 60 60">
                <path
                  d="M30,5 Q50,8 52,30 Q54,52 30,55 Q8,52 5,30 Q3,8 30,5"
                  stroke="#0e0100"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
                <path
                  d="M30,7 Q48,10 50,30 Q52,50 30,53 Q10,50 7,30 Q5,10 30,7"
                  stroke="#0e0100"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
              </svg>
              <div className="dev-project-number">1</div>
            </div>
            <a
              href={projects[0].link || '#'}
              className="dev-project-title-link"
            >
              <h3 className="dev-project-title">{projects[0].title}</h3>
            </a>
            <p className="dev-project-description">{projects[0].description}</p>

            <div className="dev-project-tools">
              {projects[0].tools.map((tool, idx) => (
                <img
                  key={idx}
                  src={tool}
                  alt="tool"
                  className="dev-tool-icon"
                />
              ))}
            </div>

            <div className="dev-project-images">
              {projects[0].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="dev-project-image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="dev-grid-cell">
          <div className="dev-cell-content">
            <div className="dev-project-number-wrapper">
              <svg className="dev-hand-drawn-circle" viewBox="0 0 60 60">
                <path
                  d="M30,5 Q50,8 52,30 Q54,52 30,55 Q8,52 5,30 Q3,8 30,5"
                  stroke="#0e0100"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
                <path
                  d="M30,7 Q48,10 50,30 Q52,50 30,53 Q10,50 7,30 Q5,10 30,7"
                  stroke="#0e0100"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
              </svg>
              <div className="dev-project-number">2</div>
            </div>
            <a
              href={projects[1].link || '#'}
              className="dev-project-title-link"
            >
              <h3 className="dev-project-title">{projects[1].title}</h3>
            </a>
            <p className="dev-project-description">{projects[1].description}</p>

            <div className="dev-project-tools">
              {projects[1].tools.map((tool, idx) => (
                <img
                  key={idx}
                  src={tool}
                  alt="tool"
                  className="dev-tool-icon"
                />
              ))}
            </div>

            <div className="dev-project-images">
              {projects[1].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="dev-project-image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="dev-grid-cell">
          <div className="dev-cell-content">
            <div className="dev-project-number-wrapper">
              <svg className="dev-hand-drawn-circle" viewBox="0 0 60 60">
                <path
                  d="M30,5 Q50,8 52,30 Q54,52 30,55 Q8,52 5,30 Q3,8 30,5"
                  stroke="#0e0100"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
                <path
                  d="M30,7 Q48,10 50,30 Q52,50 30,53 Q10,50 7,30 Q5,10 30,7"
                  stroke="#0e0100"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
              </svg>
              <div className="dev-project-number">3</div>
            </div>
            <a
              href={projects[2].link || '#'}
              className="dev-project-title-link"
            >
              <h3 className="dev-project-title">{projects[2].title}</h3>
            </a>
            <p className="dev-project-description">{projects[2].description}</p>

            <div className="dev-project-tools">
              {projects[2].tools.map((tool, idx) => (
                <img
                  key={idx}
                  src={tool}
                  alt="tool"
                  className="dev-tool-icon"
                />
              ))}
            </div>

            <div className="dev-project-images">
              {projects[2].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="dev-project-image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="dev-grid-cell">
          <div className="dev-cell-content">
            <div className="dev-project-number-wrapper">
              <svg className="dev-hand-drawn-circle" viewBox="0 0 60 60">
                <path
                  d="M30,5 Q50,8 52,30 Q54,52 30,55 Q8,52 5,30 Q3,8 30,5"
                  stroke="#0e0100"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
                <path
                  d="M30,7 Q48,10 50,30 Q52,50 30,53 Q10,50 7,30 Q5,10 30,7"
                  stroke="#0e0100"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
              </svg>
              <div className="dev-project-number">4</div>
            </div>
            <a
              href={projects[3].link || '#'}
              className="dev-project-title-link"
            >
              <h3 className="dev-project-title">{projects[3].title}</h3>
            </a>
            <p className="dev-project-description">{projects[3].description}</p>

            <div className="dev-project-tools">
              {projects[3].tools.map((tool, idx) => (
                <img
                  key={idx}
                  src={tool}
                  alt="tool"
                  className="dev-tool-icon"
                />
              ))}
            </div>

            <div className="dev-project-images">
              {projects[3].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="dev-project-image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="dev-grid-cell">
          <div className="dev-cell-content">
            <div className="dev-project-number-wrapper">
              <svg className="dev-hand-drawn-circle" viewBox="0 0 60 60">
                <path
                  d="M30,5 Q50,8 52,30 Q54,52 30,55 Q8,52 5,30 Q3,8 30,5"
                  stroke="#0e0100"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
                <path
                  d="M30,7 Q48,10 50,30 Q52,50 30,53 Q10,50 7,30 Q5,10 30,7"
                  stroke="#0e0100"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
              </svg>
              <div className="dev-project-number">5</div>
            </div>
            <a
              href={projects[4].link || '#'}
              className="dev-project-title-link"
            >
              <h3 className="dev-project-title">{projects[4].title}</h3>
            </a>
            <p className="dev-project-description">{projects[4].description}</p>

            <div className="dev-project-tools">
              {projects[4].tools.map((tool, idx) => (
                <img
                  key={idx}
                  src={tool}
                  alt="tool"
                  className="dev-tool-icon"
                />
              ))}
            </div>

            <div className="dev-project-images">
              {projects[4].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="dev-project-image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="dev-grid-cell">
          <div className="dev-cell-content">
            <div className="dev-project-number-wrapper">
              <svg className="dev-hand-drawn-circle" viewBox="0 0 60 60">
                <path
                  d="M30,5 Q50,8 52,30 Q54,52 30,55 Q8,52 5,30 Q3,8 30,5"
                  stroke="#0e0100"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
                <path
                  d="M30,7 Q48,10 50,30 Q52,50 30,53 Q10,50 7,30 Q5,10 30,7"
                  stroke="#0e0100"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.4"
                />
              </svg>
              <div className="dev-project-number">6</div>
            </div>
            <a
              href={projects[5].link || '#'}
              className="dev-project-title-link"
            >
              <h3 className="dev-project-title">{projects[5].title}</h3>
            </a>
            <p className="dev-project-description">{projects[5].description}</p>

            <div className="dev-project-tools">
              {projects[5].tools.map((tool, idx) => (
                <img
                  key={idx}
                  src={tool}
                  alt="tool"
                  className="dev-tool-icon"
                />
              ))}
            </div>

            <div className="dev-project-images">
              {projects[5].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="dev-project-image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="dev-desktop-borders">
          <svg
            className="dev-border-line dev-border-top"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,3 Q25,1 50,4 Q75,6 100,2"
              stroke="#4a3b2c"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,5 Q25,3 50,6 Q75,8 100,4"
              stroke="#4a3b2c"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-border-line dev-border-bottom"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,7 Q25,9 50,6 Q75,4 100,8"
              stroke="#4a3b2c"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,5 Q25,7 50,4 Q75,2 100,6"
              stroke="#4a3b2c"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-border-line dev-border-left"
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
          >
            <path
              d="M3,0 Q1,25 4,50 Q6,75 2,100"
              stroke="#4a3b2c"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M5,0 Q3,25 6,50 Q8,75 4,100"
              stroke="#4a3b2c"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-border-line dev-border-right"
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
          >
            <path
              d="M7,0 Q9,25 6,50 Q4,75 8,100"
              stroke="#4a3b2c"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M5,0 Q7,25 4,50 Q2,75 6,100"
              stroke="#4a3b2c"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-border-line dev-middle-vertical"
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
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
          <svg
            className="dev-border-line dev-middle-horizontal"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,5 Q25,3 50,6 Q75,8 100,4"
              stroke="#4a3b2c"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,7 Q25,5 50,8 Q75,10 100,6"
              stroke="#4a3b2c"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-border-line dev-middle-horizontal-two"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,5 Q25,3 50,6 Q75,8 100,4"
              stroke="#4a3b2c"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,7 Q25,5 50,8 Q75,10 100,6"
              stroke="#4a3b2c"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="dev-mobile-borders">
          <svg
            className="dev-mobile-border dev-mobile-border-top"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,3 Q25,1 50,4 Q75,6 100,2"
              stroke="#4a3b2c"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,5 Q25,3 50,6 Q75,8 100,4"
              stroke="#4a3b2c"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-mobile-border dev-mobile-border-bottom"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,7 Q25,9 50,6 Q75,4 100,8"
              stroke="#4a3b2c"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,5 Q25,7 50,4 Q75,2 100,6"
              stroke="#4a3b2c"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-mobile-border dev-mobile-border-left"
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
          >
            <path
              d="M3,0 Q1,25 4,50 Q6,75 2,100"
              stroke="#4a3b2c"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M5,0 Q3,25 6,50 Q8,75 4,100"
              stroke="#4a3b2c"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-mobile-border dev-mobile-border-right"
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
          >
            <path
              d="M7,0 Q9,25 6,50 Q4,75 8,100"
              stroke="#4a3b2c"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M5,0 Q7,25 4,50 Q2,75 6,100"
              stroke="#4a3b2c"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-mobile-border dev-mobile-separator-1"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,5 Q25,3 50,6 Q75,8 100,4"
              stroke="#4a3b2c"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,7 Q25,5 50,8 Q75,10 100,6"
              stroke="#4a3b2c"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-mobile-border dev-mobile-separator-2"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,5 Q25,3 50,6 Q75,8 100,4"
              stroke="#4a3b2c"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,7 Q25,5 50,8 Q75,10 100,6"
              stroke="#4a3b2c"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-mobile-border dev-mobile-separator-3"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,5 Q25,3 50,6 Q75,8 100,4"
              stroke="#4a3b2c"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,7 Q25,5 50,6 Q75,10 100,6"
              stroke="#4a3b2c"
              strokeWidth="0.6"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-mobile-border dev-mobile-separator-4"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,5 Q25,3 50,6 Q75,8 100,4"
              stroke="#4a3b2c"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,7 Q25,5 50,6 Q75,10 100,6"
              stroke="#4a3b2c"
              strokeWidth="0.6"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-mobile-border dev-mobile-separator-5"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,5 Q25,3 50,6 Q75,8 100,4"
              stroke="#4a3b2c"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,7 Q25,5 50,6 Q75,10 100,6"
              stroke="#4a3b2c"
              strokeWidth="0.6"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
          <svg
            className="dev-mobile-border dev-mobile-separator-6"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,5 Q25,3 50,6 Q75,8 100,4"
              stroke="#4a3b2c"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,7 Q25,5 50,6 Q75,10 100,6"
              stroke="#4a3b2c"
              strokeWidth="0.6"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DevProject;
