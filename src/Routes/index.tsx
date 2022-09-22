import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../Components/Commons/Layout/Layout';
import NotFound from '../pages/NotFound';
import { useSelector } from 'react-redux';
import { authenticationSelectors } from '../Components/Authentication/redux/selectors';
import loadable from '../Utils/loadable';
import { PRIVATE_ROUTES } from './privateRoutes';

export type RoutesTableType = {
	id?: string;
	path: string;
	component: React.ReactElement;
	header?: React.ReactElement;
	children?: RoutesTableType;
}[];

const renderRoutes = (routes: RoutesTableType) =>
	routes.map(route => {
		if (route.children) {
			return (
				<Route
					key={route.id || route.path}
					path={route.path}
					element={route.component}
				>
					{renderRoutes(route.children)}
				</Route>
			);
		}
		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.component}
			/>
		);
	});

function AppRoutes() {
	const isAuthenticated = useSelector(authenticationSelectors.isUserAuthenticated);

	console.log(isAuthenticated);

	const Login = loadable(() => import('../pages/Login'));

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
				>
					{renderRoutes(PRIVATE_ROUTES)}
				</Route>
				<Route
					path="login"
					element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
export default AppRoutes;
