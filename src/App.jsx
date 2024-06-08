import { lazy, useEffect } from 'react';
import { routes } from './routes';
import { useDispatch } from 'react-redux';
import {Navigate, Route, Routes} from 'react-router-dom';
import Layout from './shared/components/Layout/Layout';
import {Features} from "./components/Features/Features.jsx";
import {Reviews} from "./components/Reviews/Reviews.jsx";
import {ModalWindow} from "./shared/components/Modal/ModalWindow.jsx";

const HomePage = lazy(() => import('./pages/Home'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage.jsx'));

export default function App() {

  const { HOME, CATALOG, FAVORITES } = routes;


  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={CATALOG} element={<CatalogPage />} />
        <Route path={FAVORITES} element={<FavoritesPage />} />
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
      </Route>
        <Route path="*" element={<Navigate to={HOME} replace />} />
    </Routes>
  );
}
