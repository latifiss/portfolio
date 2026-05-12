import './skills.css';

const Skills = ({ skills = [] }) => {
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="skills-section">
      <div className="skills-title-wrapper">
        <h2 className="skills-handwritten-title">Tools & Technologies</h2>
        <div className="skills-underlines">
          <svg className="skills-underline-svg" viewBox="0 0 200 12">
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

      <div className="skills-container">
        <div className="skills-grid">
          <div className="skills-borders">
            <svg
              className="skills-border skills-border-top"
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
              className="skills-border skills-border-bottom"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M2,7 Q25,9 50,6 Q75,4 98,8"
                stroke="var(--text)"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M2,5 Q25,7 50,4 Q75,2 98,6"
                stroke="var(--text)"
                strokeWidth="0.7"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>

            <svg
              className="skills-border skills-border-left"
              viewBox="0 0 10 100"
              preserveAspectRatio="none"
            >
              <path
                d="M3,2 Q1,25 4,50 Q6,75 2,98"
                stroke="var(--text)"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M5,2 Q3,25 6,50 Q8,75 4,98"
                stroke="var(--text)"
                strokeWidth="0.7"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>

            <svg
              className="skills-border skills-border-right"
              viewBox="0 0 10 100"
              preserveAspectRatio="none"
            >
              <path
                d="M7,2 Q9,25 6,50 Q4,75 8,98"
                stroke="var(--text)"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M5,2 Q7,25 4,50 Q2,75 6,98"
                stroke="var(--text)"
                strokeWidth="0.7"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>

          <div className="skills-marquee">
            <div className="skills-track">
              {duplicatedSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="skill-image"
                  />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
