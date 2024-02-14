
import React, { useState } from 'react';
import Sidebar from '../src/Components/Bars/Sidebar';
import TemplateDashbord from './Components/TemplateDashbord';
import Clientes from './Components/Clientes';

function App() {
  const [currentComponent, setCurrentComponent] = useState('TemplateDashbord');

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  {/* Switch para exibir o componente que o usuario escolheu */}
  const renderCurrentComponent = () => {
    switch (currentComponent) {
      case 'TemplateDashbord': {/* para criar um novo adicione um case novo e no sidebar e mesmo nome que adicionou aqui */}
        return <TemplateDashbord />;
      case 'clientes':
        return <Clientes />;
      default:
        return <TemplateDashbord />;
    }
  };

  return (
    
    <div>
      {/* Montar a sessão de Header e sidebar */}
      <Sidebar onComponentChange={handleComponentChange} />
      {renderCurrentComponent()}
    </div>
  );
};

export default App;