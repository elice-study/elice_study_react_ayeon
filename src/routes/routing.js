import Layout from '../components/Layout/index';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
        ],
    },
]);

export default router;
