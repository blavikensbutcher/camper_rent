import { lazy, useEffect } from 'react';
import { routes } from './routes';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import Layout from './shared/components/Layout/Layout';

const HomePage = lazy(() => import('./pages/Home'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage.jsx'));

export default function App() {
  const dispatch = useDispatch();

  const { HOME, CATALOG, FAVORITES } = routes;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={CATALOG} element={<CatalogPage />} />
        <Route path={FAVORITES} element={<FavoritesPage />} />
      </Route>
      <Route
        path="*"
        element={
          <Layout>
            <p>NOT FOUND PAGE </p>
          </Layout>
        }
      />
    </Routes>
  );
}
