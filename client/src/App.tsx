import { Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Studio } from './pages/Studio';

// @uxid client/src/App::App
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/studio" element={<Studio />} />
    </Routes>
  );
}
