import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../Components/Commons/Layout/Layout';
import HomePage from '../pages/Home';
import Employees from '../pages/Employees';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Navigate to='home' />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/people" element={<Employees />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
export default AppRoutes;
