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
        element={<Home />}
      />
    </Route>
  )
);

function CreatePage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
