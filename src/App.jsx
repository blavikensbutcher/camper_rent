import { lazy } from 'react';
import { routes } from './routes';
import {Navigate, Route, Routes} from 'react-router-dom';
import Layout from './shared/components/Layout/Layout';


const HomePage = lazy(() => import('./pages/Home'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage.jsx'));

export default function App() {

  const { HOME, FAVORITES } = routes;


  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={FAVORITES} element={<FavoritesPage />} />
      </Route>
        <Route path="*" element={<Navigate to={HOME} replace />} />
    </Routes>
  );
}
