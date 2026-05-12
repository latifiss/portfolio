import './contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/latifiss',
      icon: (
        <svg viewBox="0 0 60 60" className="hand-drawn-icon">
          <path
            d="M30,10 Q38,8 42,14 Q48,20 46,30 Q44,40 38,46 Q34,50 30,50 Q26,50 22,46 Q16,40 14,30 Q12,20 18,14 Q22,8 30,10"
            stroke="var(--text)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          <path
            d="M30,12 Q37,10 40,15 Q46,21 44,30 Q42,39 36,44 Q32,48 30,48 Q28,48 24,44 Q18,39 16,30 Q14,21 20,15 Q23,10 30,12"
            stroke="var(--text)"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
          <path
            d="M30,18 Q34,18 36,22 Q38,26 36,30 Q34,34 30,34 Q26,34 24,30 Q22,26 24,22 Q26,18 30,18"
            stroke="var(--text)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M22,30 Q18,32 16,36"
            stroke="var(--text)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M38,30 Q42,32 44,36"
            stroke="var(--text)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M24,42 Q26,38 30,36 Q34,38 36,42"
            stroke="var(--text)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <circle
            cx="26"
            cy="26"
            r="2"
            stroke="var(--text)"
            strokeWidth="0.8"
            fill="none"
          />
          <circle
            cx="34"
            cy="26"
            r="2"
            stroke="var(--text)"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/latif-issaka-65b3a11a9/',
      icon: (
        <svg viewBox="0 0 60 60" className="hand-drawn-icon">
          <path
            d="M12,8 Q20,5 30,6 Q40,5 48,8 Q52,12 52,20 Q53,40 52,50 Q48,54 40,52 Q20,53 12,50 Q6,46 8,38 Q7,18 8,12 Q10,6 12,8"
            stroke="var(--text)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          <path
            d="M14,10 Q21,7 30,8 Q39,7 46,10 Q50,14 50,22 Q51,39 50,48 Q46,52 38,50 Q22,51 14,48 Q8,44 10,36 Q9,20 10,14 Q12,8 14,10"
            stroke="var(--text)"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
          <path
            d="M20,26 L20,42"
            stroke="var(--text)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M20,22 Q20,20 22,20 Q24,20 24,22 L24,42"
            stroke="var(--text)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M34,28 L34,42"
            stroke="var(--text)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M34,24 Q34,22 36,22 Q38,22 38,24 L38,42"
            stroke="var(--text)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M28,28 L30,28"
            stroke="var(--text)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <circle
            cx="36"
            cy="22"
            r="3"
            stroke="var(--text)"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:latifiss@outlook.com',
      icon: (
        <svg viewBox="0 0 60 60" className="hand-drawn-icon">
          <path
            d="M8,16 Q15,12 30,12 Q45,12 52,16 Q54,20 52,44 Q50,48 45,48 L15,48 Q10,48 8,44 Q6,20 8,16"
            stroke="var(--text)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          <path
            d="M10,18 Q16,14 30,14 Q44,14 50,18 Q52,22 50,43 Q48,46 43,46 L17,46 Q12,46 10,43 Q8,22 10,18"
            stroke="var(--text)"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
          <path
            d="M12,18 L28,30 Q30,32 32,30 L48,18"
            stroke="var(--text)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14,20 L29,31 Q30,32 31,31 L46,20"
            stroke="var(--text)"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
          <path
            d="M15,25 Q22,30 30,30 Q38,30 45,25"
            stroke="var(--text)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="contact-section">
      <div className="contact-title-wrapper">
        <h2 className="contact-handwritten-title">Let's Connect</h2>
        <div className="contact-underlines">
          <svg className="contact-underline-svg" viewBox="0 0 200 12">
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

      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-borders">
            <svg
              className="contact-border contact-border-top"
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
              className="contact-border contact-border-bottom"
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
              className="contact-border contact-border-left"
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
              className="contact-border contact-border-right"
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

          <div className="contact-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-link"
              >
                <div className="contact-icon-wrapper">
                  {social.icon}
                  <span className="contact-icon-name">{social.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
