import React, { useEffect, useState } from 'react';
import { CheckCircle, Mail, ChefHat, Package, Users, Clock, Apple, Cherry, Carrot } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animateIcons, setAnimateIcons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const animationTimer = setTimeout(() => setShowAnimation(true), 800);
    const iconTimer = setTimeout(() => setAnimateIcons(true), 2000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
      clearTimeout(iconTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F2F7FA] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Continuously rolling fruits animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Apple rolling continuously from left to right */}
        <div className="absolute top-1/3 w-full">
          <div className="animate-roll-continuous-left">
            <Apple className="text-red-500 w-12 h-12 drop-shadow-lg" fill="currentColor" />
          </div>
        </div>

        {/* Cherry rolling continuously from right to left */}
        <div className="absolute top-1/2 w-full">
          <div className="animate-roll-continuous-right">
            <Cherry className="text-red-600 w-10 h-10 drop-shadow-lg" fill="currentColor" />
          </div>
        </div>

        {/* Carrot rolling continuously from left to right (lower) */}
        <div className="absolute bottom-1/3 w-full">
          <div className="animate-roll-continuous-left-slow">
            <Carrot className="text-orange-500 w-8 h-8 drop-shadow-lg" fill="currentColor" />
          </div>
        </div>

        {/* Second apple rolling from right to left */}
        <div className="absolute top-2/3 w-full">
          <div className="animate-roll-continuous-right-slow">
            <Apple className="text-green-500 w-10 h-10 drop-shadow-lg" fill="currentColor" />
          </div>
        </div>

        {/* Additional cherry rolling from left to right */}
        <div className="absolute top-1/4 w-full">
          <div className="animate-roll-continuous-left-fast">
            <Cherry className="text-purple-500 w-6 h-6 drop-shadow-lg" fill="currentColor" />
          </div>
        </div>

        {/* Small carrot rolling from right to left */}
        <div className="absolute bottom-1/4 w-full">
          <div className="animate-roll-continuous-right-fast">
            <Carrot className="text-yellow-500 w-6 h-6 drop-shadow-lg" fill="currentColor" />
          </div>
        </div>

        {/* Floating fruits for ambiance */}
        <div className={`absolute top-20 left-1/4 transition-all duration-2000 delay-1000 ${showAnimation ? 'opacity-30' : 'opacity-0'}`}>
          <Apple className="text-green-400 w-6 h-6 animate-pulse" fill="currentColor" />
        </div>
        
        <div className={`absolute bottom-20 right-1/4 transition-all duration-2000 delay-1500 ${showAnimation ? 'opacity-30' : 'opacity-0'}`}>
          <Cherry className="text-purple-400 w-5 h-5 animate-bounce" fill="currentColor" />
        </div>

        <div className={`absolute top-32 right-1/3 transition-all duration-2000 delay-2000 ${showAnimation ? 'opacity-20' : 'opacity-0'}`}>
          <Carrot className="text-orange-400 w-4 h-4 animate-pulse" fill="currentColor" />
        </div>
      </div>

      {/* Background animated icons */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className={`absolute top-20 left-20 transition-all duration-1000 ${animateIcons ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <ChefHat className="text-[#7CA98D] w-8 h-8 animate-pulse" />
        </div>
        <div className={`absolute top-32 right-32 transition-all duration-1000 delay-300 ${animateIcons ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Package className="text-[#7CA98D] w-10 h-10 animate-bounce" />
        </div>
        <div className={`absolute bottom-32 left-32 transition-all duration-1000 delay-500 ${animateIcons ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Users className="text-[#7CA98D] w-6 h-6 animate-pulse" />
        </div>
        <div className={`absolute bottom-20 right-20 transition-all duration-1000 delay-700 ${animateIcons ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Clock className="text-[#7CA98D] w-7 h-7 animate-bounce" />
        </div>
      </div>

      {/* Main content with transparent background */}
      <div className={`bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center relative z-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Success icon with animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 bg-[#7CA98D] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <CheckCircle className="text-white w-12 h-12" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#7CA98D] rounded-full animate-ping"></div>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#3E4C59] mb-4 leading-tight drop-shadow-sm">
          ¡Email Validado!
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#3E4C59] opacity-90 mb-2 drop-shadow-sm">
          Tu cuenta de DespensaGO ha sido
        </p>
        <p className="text-lg text-[#3E4C59] opacity-90 mb-8 drop-shadow-sm">
          verificada exitosamente
        </p>

        {/* Email icon with animation and notification badge */}
        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            {/* Mail envelope with enhanced glow effect */}
            <div className="animate-pulse shadow-2xl shadow-[#7CA98D]/50">
              <Mail className="text-[#7CA98D] w-20 h-20 animate-bounce drop-shadow-lg" />
            </div>
            
            {/* Notification badge with "1" */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            
            {/* Continuous sparkle effects */}
            <div className="absolute -top-3 -left-3 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-yellow-400 rounded-full animate-ping delay-500"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-1000"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-700"></div>
            <div className="absolute top-1/2 left-0 w-1 h-1 bg-red-400 rounded-full animate-ping delay-300"></div>
          </div>
        </div>

        {/* Description */}
        <div className="text-[#3E4C59] opacity-80 mb-8 space-y-2">
          <p className="text-sm drop-shadow-sm">
            Ahora puedes disfrutar de todas las funcionalidades:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="inline-flex items-center gap-1 bg-white/40 backdrop-blur-sm text-[#7CA98D] px-3 py-1 rounded-full text-xs font-medium border border-white/30">
              <Package className="w-3 h-3" />
              Gestión de despensa
            </span>
            <span className="inline-flex items-center gap-1 bg-white/40 backdrop-blur-sm text-[#7CA98D] px-3 py-1 rounded-full text-xs font-medium border border-white/30">
              <ChefHat className="w-3 h-3" />
              Recetas personalizadas
            </span>
            <span className="inline-flex items-center gap-1 bg-white/40 backdrop-blur-sm text-[#7CA98D] px-3 py-1 rounded-full text-xs font-medium border border-white/30">
              <Users className="w-3 h-3" />
              Red social
            </span>
          </div>
        </div>

        {/* Secondary action */}
        <p className="text-sm text-[#3E4C59] opacity-70 mt-6 drop-shadow-sm">
          ¿Necesitas ayuda?{' '}
          <a href="#" className="text-[#7CA98D] hover:text-[#6B9A7E] underline transition-colors">
            Contacta soporte
          </a>
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-4 h-4 bg-[#7CA98D] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-3 h-3 bg-[#7CA98D] rounded-full opacity-30 animate-pulse delay-500"></div>
        <div className="absolute bottom-10 left-20 w-2 h-2 bg-[#7CA98D] rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-16 w-5 h-5 bg-[#7CA98D] rounded-full opacity-15 animate-pulse delay-700"></div>
      </div>
    </div>
  );
}

export default App;