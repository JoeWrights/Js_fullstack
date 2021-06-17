import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RenderRoutes from './routes/index'
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <RenderRoutes></RenderRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
