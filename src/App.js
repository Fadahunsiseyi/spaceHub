import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rockets from './pages/Rockets';
import Dragons from './pages/Dragons';
import Missions from './pages/Missions';
import Layout from './components/shared/Layout';
import Profile from './pages/Profiles';
import { NoPage } from './components';
import './styles/global.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index exact path="/" element={<Rockets />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
