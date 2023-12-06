import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './styles.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Stats from './pages/stats';
import Index from './pages/index';
import Login from './pages/login';
import UpdateStats from './pages/updateStats';
import PrivateRoute from './auth/PrivateRoute';

const router = createHashRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: "/stats",
    element: <Stats />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/update-stats',
    element:<PrivateRoute element={<UpdateStats />} />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
