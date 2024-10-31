"use client"
import React, { createContext, useState } from 'react'

export const AppStateContext = createContext(null);



function AppState({children}) {
  const [openWindow, setOpenWindow] = useState(null);
  const closeWindow = () => {
    setOpenWindow(null);
  };

  return (
    <AppStateContext.Provider value={{openWindow,setOpenWindow,closeWindow}}>
      {children}
    </AppStateContext.Provider>
  )
}

export default AppState;
