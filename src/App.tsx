import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import pages from './pages';
import Access from './components/Access';

console.log('!!', Home);


const App = () => (
  <Routes>
    {pages.map(({ to, component, role }) =>
      <Route
        key={to}
        path={to}        
        element={<Access role={role}>{component}</Access>}
      />)}
      <Route path="*" element={<Home />} />
  </Routes>
);

export default App;
