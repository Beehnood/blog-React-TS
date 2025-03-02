import React from 'react';

interface IContainerProps{
  children: React.ReactNode;
 
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <div className="max-w-screen-xlg mx-auto px-8 ">
    
      {children}

    </div>
  );
};

export default Container;