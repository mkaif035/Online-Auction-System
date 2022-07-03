import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebarVisibleMobile, setSidebarVisibleMobile] = useState(false);
  const [visibleAddItem, setVisibleAddItem] = useState(false);

  return (
    <AppContext.Provider
      value={{
        sidebarVisibleMobile: sidebarVisibleMobile,
        setSidebarVisibleMobile: setSidebarVisibleMobile,
        visibleAddItem: visibleAddItem,
        setVisibleAddItem: setVisibleAddItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
