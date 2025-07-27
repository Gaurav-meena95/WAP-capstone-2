import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PublicRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    // Redirect to home page if user is already logged in
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute; 