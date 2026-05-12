import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AirbnbCaseStudy from './pages/airbnb-case-study/airbnbCaseStudy';
import ERPDesignSystem from './pages/erp-design-system/erpDesignSystem';
import StreamPlus from './pages/stream-plus/streamPlus';
import PinkFinance from './pages/pink-finance/pinkFinance';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study/airbnb" element={<AirbnbCaseStudy />} />
      <Route path="/project/erp-design-system" element={<ERPDesignSystem />} />
      <Route path="/project/stream-plus" element={<StreamPlus />} />
      <Route path="/project/pink-finance" element={<PinkFinance />} />
    </Routes>
  );
}

export default App;
