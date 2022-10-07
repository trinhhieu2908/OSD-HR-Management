import loadable from "../Utils/loadable";
import { RoutesTableType } from './index';

const UserManagement = loadable(() => import('../pages/UserManagement'));

export const ADMIN_ROUTES: RoutesTableType = [
    {
        path: 'user-management',
        component: <UserManagement />,
    },
];
