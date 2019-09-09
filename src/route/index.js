import Home from '../pages/Home';
// import NotFound from '../pages/NotFound';
import Catalog from '../pages/Catalog';
// import Signup from '../pages/Signup';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'catalog',
    component: Catalog,
    exact: true,
    path: '/catalog'
  },
  // {
  //   name: '404',
  //   component: NotFound,
  //   exact: true,
  //   path: '*'
  // }
];
