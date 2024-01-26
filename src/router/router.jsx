import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Index, { loader as clientesLoader } from '../pages/Index';
import NuevoCliente, { action as nuevoClienteAction } from '../pages/NuevoCliente';
import { action as eliminarClienteAction } from '../components/Cliente';
import EditarCliente, { action as editarClienteAction, loader as editarClienteLoader } from '../pages/EditarCliente';
import ErrorPage from '../components/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction,
      },
    ],
  },
]);
