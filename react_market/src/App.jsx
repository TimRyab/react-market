import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import Privat from './hoc/Privat';
import PrivatAdmin from './hoc/PrivatAdmin';
import HomePage from './pages/HomePage';
import { routes, customerRoutes, AdminRoutes } from './utils/routes';
import Goods from './components/Goods/Goods'

import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Goods />} />
          {routes.map((item) => {
            return <Route key={uuidv4()} path={item.link} element={item.component} />;
          })}
          {customerRoutes.map((item) => {
            return <Route key={uuidv4()} path={item.link} element={<Privat>{item.component}</Privat>} />;
          })}
          {AdminRoutes.map((item) => {
            return <Route key={uuidv4()} path={item.link} element={<PrivatAdmin>{item.component}</PrivatAdmin>}/>;
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
