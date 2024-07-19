import { Header } from './components/Header/Header';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { makeRequest } from './utils/makeRequest';

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<CreatePage />}>
      <Route
        index
        loader={() => makeRequest('/api/books', 'GET')}
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
    </Route>
  )
);

function CreatePage() {
  return (
    <>
      <Outlet />
    </>
  );
}
