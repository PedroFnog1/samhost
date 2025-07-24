import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left side with brand and logo */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary-600 flex-col justify-center items-center p-12 text-white">
        <div className="flex items-center justify-center mb-8">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-32 w-auto object-contain"
            onError={(e) => {
              console.error('Erro ao carregar logo:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <p className="text-xl mb-8 text-center">
          Gerencie seus streams e conteúdo on-demand com facilidade e eficiência
        </p>
      </div>

      {/* Right side with auth forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-6 lg:hidden">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-20 w-auto object-contain"
                onError={(e) => {
                  console.error('Erro ao carregar logo mobile:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
