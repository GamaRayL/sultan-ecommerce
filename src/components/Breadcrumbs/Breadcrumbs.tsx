import React from 'react';
import { useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';
  const crumbs = location.pathname.split('/');
  return (
    <div style={{ maxWidth: '1370px', padding: 0, margin: '0 auto' }}>Breadcrumbs</div>
  );
};
