import { createContext, useState } from 'react';

export const ToggleContext = createContext(false);

// eslint-disable-next-line react/prop-types
export const ToggleProvider = ({ children }) => {
  const [isOpenToggle, setIsToggleOpen] = useState(false);

  return (
    <ToggleContext.Provider value={{ isOpenToggle, setIsToggleOpen }}>
      {children}
    </ToggleContext.Provider>
  );
};
