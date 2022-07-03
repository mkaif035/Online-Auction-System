import React, { createContext, useContext } from "react";

export const TabView = ({ children }) => {
  const { index } = useContext(TabNavigationContext);
  return children[index];
};

export const Tab = ({ children, page }) => {
  const { index, setIndex } = useContext(TabNavigationContext);

  return (
    <div
      className={`navigation-link ${page == index ? "selected" : ""}`}
      onClick={() => setIndex(page)}
    >
      {children}
    </div>
  );
};

export const TabNavigationContext = createContext({});

export const TabNavigationProvider = ({ children }) => {
  const [index, setIndex] = React.useState(0);
  return (
    <TabNavigationContext.Provider value={{ index, setIndex }}>
      {children}
    </TabNavigationContext.Provider>
  );
};
