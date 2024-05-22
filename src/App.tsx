import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/Pages/HomePage';
import PeoplePage from './components/Pages/PeoplePage';

import './App.scss';
import ErrorPage from './components/Pages/ErrorPage';

const App = () => (
  <div data-cy="app">
    <Header />

    <main className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace={true} />} />
          <Route path="/people" element={<PeoplePage />}>
            <Route path=":personSlug" element={<PeoplePage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </main>
  </div>
);

export default App;
