import React from 'react';
import { Cuboid as Cube } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Cube size={24} className="text-white" />
    </div>
  );
};

export default Logo;