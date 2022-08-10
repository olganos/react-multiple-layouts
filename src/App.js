import { Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/layout/Layout';
import Layout2 from './components/layout2/Layout2';
import Layout3 from './components/layout3/Layout3';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Page3 from './pages/page3/Page3';
import Page4 from './pages/page4/Page4';
import Page5 from './pages/page5/Page5';
import Page6 from './pages/page6/Page6';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Route>
      <Route element={<Layout2 />}>
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Route>
      <Route element={<Layout3 />}>
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
      </Route>
    </Routes>
  );
}

export default App;
