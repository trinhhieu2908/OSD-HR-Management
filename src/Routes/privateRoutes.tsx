import loadable from "../Utils/loadable";
import { RoutesTableType } from './index';

const HomePage = loadable(() => import('../pages/Home'));
const Employees = loadable(() => import('../pages/Employees'));

export const PRIVATE_ROUTES: RoutesTableType = [
    {
        path: 'home',
        component: <HomePage />,
    },
    {
        path: 'people',
        component: <Employees />,
    },
];
