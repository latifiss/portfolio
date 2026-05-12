import './header.css';
import Tab from '../tab/tab';

const Header = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="header-container">
      <div className="logo-wrapper">
        <img src="/assets/logo.png" alt="Logo" className="logo-image" />
      </div>
      <Tab tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
};

export default Header;
