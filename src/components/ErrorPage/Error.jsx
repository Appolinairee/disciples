import React from 'react';
import './Error.css'; 
import TransitionEffect from '../../components/TransitionEffect/TransitionEffect';

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>Erreur 404</h1>
        <p>La page que vous recherchez n'existe pas.</p>
      </div>
      <TransitionEffect />
    </div>
  );
};

export default Error404;
