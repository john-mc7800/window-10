"use client"
import React, { createContext } from 'react'

const AppStateContext= createContext(null)


function appstate({children}) {
  return (
    <AppStateContext.Provider value="">
      {children}
    </AppStateContext.Provider>
  )
}

export default appstate
