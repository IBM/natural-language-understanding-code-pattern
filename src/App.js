import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import ServiceContainer from './components/ServiceContainer';
import { description, title } from './data/input.json';

export const App = () => (
  <div className="app-container">
    <Header description={description} title={title} />
    <ServiceContainer />
  </div>
);

export default App;
