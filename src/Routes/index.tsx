import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../Components/Commons/Layout/Layout';
import NotFound from '../pages/NotFound';
import { useSelector } from 'react-redux';
import { authenticationSelectors } from '../Components/Authentication/redux/selectors';
import loadable from '../Utils/loadable';
import { PRIVATE_ROUTES } from './privateRoutes';
import { getAccessToken } from '../Utils/token-config';
import { authenticationHooks } from '../Components/Authentication/hooks';
import { useDispatch } from 'react-redux';
import { actions as authActions } from "../Components/Authentication/redux/slice";

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
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(authenticationSelectors.isUserAuthenticated);
	const userInfo = useSelector(authenticationSelectors.getCurrentUser);

	const Login = loadable(() => import('../pages/Login'));

	const accessToken = getAccessToken();
	const { data: user, isLoading: isDecodingToken } = authenticationHooks.useDecodeToken(accessToken!)

	useEffect(() => {
		if (user) {			
			dispatch(authActions.setUser(user));
		}
	}, [user])

	return (
		<>
			{!isDecodingToken ?
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={isAuthenticated && userInfo.isActive ? <Layout /> : <Navigate to="/login" />}
					>
						{renderRoutes(PRIVATE_ROUTES)}
					</Route>
					<Route
						path="login"
						element={isAuthenticated && userInfo.isActive ? <Navigate to="/home" /> : <Login />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</BrowserRouter> : <div>Loading...</div>}
		</>		
	);
}
export default AppRoutes;
