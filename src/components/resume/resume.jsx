import './resume.css';

const Resume = ({ resumeLink = '#', summary = '', role = 'designer' }) => {
  const designerSummary =
    'Product designer with 5+ years of experience creating user-centered digital products. Passionate about design systems, accessibility, wireframing, prototyping, and creating seamless user experiences across web and mobile platforms. Skilled in Figma, Adobe Creative Suite, and user research methodologies.';

  const developerSummary =
    'Full-stack developer with 5+ years of experience building scalable web applications. Passionate about clean code, performance optimization, and creating seamless user experiences. Skilled in React, Node.js, TypeScript, and modern frontend architectures.';

  const displaySummary =
    summary || (role === 'designer' ? designerSummary : developerSummary);

  return (
    <div className="resume-container">
      <div className="resume-wrapper">
        <div className="resume-title-wrapper">
          <h2 className="resume-handwritten-title">Resume</h2>
          <div className="resume-underlines">
            <svg className="resume-underline-svg" viewBox="0 0 200 12">
              <path
                d="M5,8 Q50,14 100,8 Q150,2 195,9"
                stroke="var(--text)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M8,9.5 Q55,15.5 102,9.5 Q148,4 192,10.5"
                stroke="var(--text)"
                strokeWidth="0.9"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>

        <div className="resume-grid">
          <div className="resume-borders">
            <svg
              className="resume-border resume-border-top"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M2,3 Q25,1 50,4 Q75,6 98,2"
                stroke="var(--text)"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M2,5 Q25,3 50,6 Q75,8 98,4"
                stroke="var(--text)"
                strokeWidth="0.7"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
            <svg
              className="resume-border resume-border-bottom"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M2,7 Q25,9 50,6 Q75,4 98,8"
                stroke="var(--text)"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M2,5 Q25,7 50,4 Q75,2 98,6"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
            <svg
              className="resume-border resume-border-left"
              viewBox="0 0 10 100"
              preserveAspectRatio="none"
            >
              <path
                d="M3,0 Q1,25 4,50 Q6,75 2,100"
                stroke="var(--text)"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M5,0 Q3,25 6,50 Q8,75 4,100"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
            <svg
              className="resume-border resume-border-right"
              viewBox="0 0 10 100"
              preserveAspectRatio="none"
            >
              <path
                d="M7,0 Q9,25 6,50 Q4,75 8,100"
                stroke="var(--text)"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M5,0 Q7,25 4,50 Q2,75 6,100"
                stroke="var(--text)"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>

          <div className="resume-content">
            <div className="resume-summary">
              <p>{displaySummary}</p>
            </div>

            <div className="resume-link-wrapper">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-download-link"
              >
                <span className="resume-link-icon">📄</span>
                <span className="resume-link-text">View Full Resume</span>
                <svg className="resume-link-arrow" viewBox="0 0 24 24">
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
        </div>
      </div>
    </div>
  );
};

export default Resume;
