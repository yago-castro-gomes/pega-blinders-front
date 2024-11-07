import React from 'react';
import MagicButton from './MagicButton';
import Image from 'next/image';
import logo from '../../public/assets/logo.png';



const Login = () => {
  return (

      <div className="flex items-center w-full h-full  overflow-hidden shadow-2xl bg-black-300">
        {/* Card de Login */}
        <div className="w-2/6 h-full flex flex-col items-center justify-center  p-10">
          {/* Logotipo e Título */}
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-3xl  text-secondary mt-4">LOGIN</h1>
          </div>

          {/* Campos de Login */}
          <div className="w-full">
            {/* Campo de Username */}
            <div className="flex flex-col items-start mb-4">
              <label htmlFor="username" className="text-white mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-4 py-3 border border-primary text-white bg-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your username"
              />
            </div>

            {/* Campo de Senha */}
            <div className="flex flex-col items-start mb-6">
              <label htmlFor="password" className="text-white mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 border border-primary text-white bg-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
            </div>

            {/* Botão de Login */}
            <MagicButton title="LOGIN" position="right" otherClasses="w-full mt-4" />

            {/* Lembrar e Esqueceu a Senha */}
            <div className="mt-4 flex items-center justify-between text-sm text-white">
              <label className="inline-flex items-center">
                <input type="checkbox" className="accent-primary mr-2" /> Remember me
              </label>
              <a href="#" className="text-primary hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>
        </div>

        {/* Card de Boas-Vindas */}
        <div
          className="w-4/6 h-full flex items-center justify-center text-center  rounded-r-3xl"
        >

          <div className="text-white px-10">
          <div className="flex flex-col justify-center m-auto items-center space-x-2 w-2/6">
          <Image src={logo} alt="logo" width={150} height={150}/>
          <span className="text-secondary font-semibold text-sm">pega blinders</span>
        </div>
            <h1 className="text-4xl font-bold mb-4">Welcome</h1>
            <p className="text-lg mb-8">
              Discover the power of AI to analyze every move of your favorite poker players. Optimize your strategy and
              gain a competitive edge.
            </p>
            <a href="#about">
              <MagicButton title="Learn More" position="right" otherClasses="w-1/2" />
            </a>
          </div>
        </div>
      </div>
  );
};

export default Login;
