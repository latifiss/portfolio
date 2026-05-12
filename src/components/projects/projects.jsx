import './projects.css';
import { useState } from 'react';

const ProjectsGrid = ({ projects }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="grid-container">
      <div className="excel-grid">
        <div className="grid-cell">
          <div className="cell-content">
            <div className="project-number-wrapper">
              <svg className="hand-drawn-circle" viewBox="0 0 60 60">
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
              <div className="project-number">1</div>
            </div>
            <div className="project-title-wrapper">
              <a href={projects[0].link || '#'} className="project-title-link">
                <h3 className="project-title">{projects[0].title}</h3>
              </a>
            </div>
            <p className="project-description">{projects[0].description}</p>

            <div className="project-tools">
              {projects[0].tools.map((tool, idx) => (
                <img key={idx} src={tool} alt="tool" className="tool-icon" />
              ))}
            </div>

            <div className="project-images">
              {projects[0].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="project-image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid-cell">
          <div className="cell-content">
            <div className="project-number-wrapper">
              <svg className="hand-drawn-circle" viewBox="0 0 60 60">
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
              <div className="project-number">2</div>
            </div>
            <div className="project-title-wrapper">
              <a href={projects[1].link || '#'} className="project-title-link">
                <h3 className="project-title">{projects[1].title}</h3>
              </a>
            </div>
            <p className="project-description">{projects[1].description}</p>

            <div className="project-tools">
              {projects[1].tools.map((tool, idx) => (
                <img key={idx} src={tool} alt="tool" className="tool-icon" />
              ))}
            </div>

            <div className="project-images">
              {projects[1].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="project-image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid-cell">
          <div className="cell-content">
            <div className="project-number-wrapper">
              <svg className="hand-drawn-circle" viewBox="0 0 60 60">
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
              <div className="project-number">3</div>
            </div>
            <div className="project-title-wrapper">
              <a href={projects[2].link || '#'} className="project-title-link">
                <h3 className="project-title">{projects[2].title}</h3>
              </a>
              <button onClick={openModal} className="lock-button">
                <img
                  src="/assets/icons/lock.png"
                  alt="Lock"
                  className="lock-icon"
                />
              </button>
            </div>
            <p className="project-description">{projects[2].description}</p>

            <div className="project-tools">
              {projects[2].tools.map((tool, idx) => (
                <img key={idx} src={tool} alt="tool" className="tool-icon" />
              ))}
            </div>

            <div className="project-images">
              {projects[2].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="project-image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid-cell">
          <div className="cell-content">
            <div className="project-number-wrapper">
              <svg className="hand-drawn-circle" viewBox="0 0 60 60">
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
              <div className="project-number">4</div>
            </div>
            <div className="project-title-wrapper">
              <a href={projects[3].link || '#'} className="project-title-link">
                <h3 className="project-title">{projects[3].title}</h3>
              </a>
              <button onClick={openModal} className="lock-button">
                <img
                  src="/assets/icons/lock.png"
                  alt="Lock"
                  className="lock-icon"
                />
              </button>
            </div>
            <p className="project-description">{projects[3].description}</p>

            <div className="project-tools">
              {projects[3].tools.map((tool, idx) => (
                <img key={idx} src={tool} alt="tool" className="tool-icon" />
              ))}
            </div>

            <div className="project-images">
              {projects[3].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="project-image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid-cell">
          <div className="cell-content">
            <div className="project-number-wrapper">
              <svg className="hand-drawn-circle" viewBox="0 0 60 60">
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
              <div className="project-number">5</div>
            </div>
            <div className="project-title-wrapper">
              <a href={projects[4].link || '#'} className="project-title-link">
                <h3 className="project-title">{projects[4].title}</h3>
              </a>
            </div>
            <p className="project-description">{projects[4].description}</p>

            <div className="project-tools">
              {projects[4].tools.map((tool, idx) => (
                <img key={idx} src={tool} alt="tool" className="tool-icon" />
              ))}
            </div>

            <div className="project-images">
              {projects[4].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="project-image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid-cell">
          <div className="cell-content">
            <div className="project-number-wrapper">
              <svg className="hand-drawn-circle" viewBox="0 0 60 60">
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
              <div className="project-number">6</div>
            </div>
            <div className="project-title-wrapper">
              <a href={projects[5].link || '#'} className="project-title-link">
                <h3 className="project-title">{projects[5].title}</h3>
              </a>
            </div>
            <p className="project-description">{projects[5].description}</p>

            <div className="project-tools">
              {projects[5].tools.map((tool, idx) => (
                <img key={idx} src={tool} alt="tool" className="tool-icon" />
              ))}
            </div>

            <div className="project-images">
              {projects[5].images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`project shot ${idx + 1}`}
                  className="project-image"
                />
              ))}
            </div>
          </div>
        </div>

        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <div className="modal-icon">
                <img src="/assets/icons/lock.png" alt="Lock" />
              </div>
              <h3 className="modal-title">Private Project</h3>
              <p className="modal-message">Protected by NDA agreement</p>
            </div>
          </div>
        )}

        <div className="desktop-borders">
          <svg
            className="border-line border-top"
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
            className="border-line border-bottom"
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
            className="border-line border-left"
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
            className="border-line border-right"
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
            className="border-line middle-vertical"
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
            className="border-line middle-horizontal"
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
            className="border-line middle-horizontal-two"
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

        <div className="mobile-borders">
          <svg
            className="mobile-border mobile-border-top"
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
            className="mobile-border mobile-border-bottom"
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
            className="mobile-border mobile-border-left"
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
            className="mobile-border mobile-border-right"
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
            className="mobile-border mobile-separator-1"
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
            className="mobile-border mobile-separator-2"
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
            className="mobile-border mobile-separator-3"
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
            className="mobile-border mobile-separator-4"
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
            className="mobile-border mobile-separator-5"
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
            className="mobile-border mobile-separator-6"
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

export default ProjectsGrid;
