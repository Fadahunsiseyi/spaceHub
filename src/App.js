import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Rocket, Mission, Profile, NoPage,
} from './components';
import Layout from './components/shared/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index exact path="/" element={<Rocket />} />
          <Route path="/missions" element={<Mission />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
