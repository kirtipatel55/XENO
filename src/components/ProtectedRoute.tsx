import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }: any) => {
    return (
        <Route
            {...rest}
            element={isLoggedIn ? <Component /> : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;