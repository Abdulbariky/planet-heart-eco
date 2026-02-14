import React from 'react';
import { Heart } from 'lucide-react';

const Logo = ({ className = "w-8 h-8", showText = true, textClassName = "" }) => {
  // Set this to true to use your custom logo
  const useCustomLogo = true;
  
  // Your logo path - UPDATE THIS
  const customLogoUrl = '/images/logo.png';  // Changed from '/logo.png'

  if (useCustomLogo) {
    return (
      <div className="flex items-center gap-2">
        <img 
          src={customLogoUrl} 
          alt="Planet Heart Eco Ltd" 
          className={className}
        />
        {showText && (
          <span className={textClassName || "text-xl font-bold bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent"}>
            Planet Heart Eco Ltd
          </span>
        )}
      </div>
    );
  }

  // Default Heart Icon Logo
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Heart className={`${className} text-primary-600 dark:text-primary-400 fill-primary-600 dark:fill-primary-400`} />
        <div className="absolute inset-0 bg-primary-600 dark:bg-primary-400 blur-xl opacity-20" />
      </div>
      {showText && (
        <span className={textClassName || "text-xl font-bold bg-gradient-to-r from-primary-600 to-ocean-600 dark:from-primary-400 dark:to-ocean-400 bg-clip-text text-transparent"}>
          Planet Heart Eco Ltd
        </span>
      )}
    </div>
  );
};

export default Logo;