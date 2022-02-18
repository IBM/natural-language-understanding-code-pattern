import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import ServiceContainer from './components/ServiceContainer';
import input from './data/input.json';
import useScript from './hooks/useScript';

export const App = () => {
  useScript(
    'https://cdn.jsdelivr.net/gh/watson-developer-cloud/watson-developer-cloud.github.io@master/analytics.js',
  );

  return (
    <div className="app-container">
      <Header description={input.description} title={input.title} />
      <ServiceContainer />
    </div>
  );
};

export default App;
