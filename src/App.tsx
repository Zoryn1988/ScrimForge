import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Index } from '@/pages/Index';
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';
import { Dashboard } from '@/pages/Dashboard';
import { Team } from '@/pages/Team';
import { FindScrims } from '@/pages/FindScrims';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/find-scrims" element={<FindScrims />} />
          <Route path="/team/:id" element={<Team />} />
          <Route path="/teams" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;