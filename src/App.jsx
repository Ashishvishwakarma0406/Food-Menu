import React from 'react';
import menuItems from './item';
import Menu from './Component/Menu';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <Menu key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
