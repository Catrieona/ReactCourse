import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '../../hooks/useAdmin';

export function PrivateRoute({ children }) {
  const isAdmin = useAdmin();
  return isAdmin ? children : <Navigate to='/courses' />;
}
