import React, {  createContext  } from 'react'

export const Context = createContext();


const Com = (props) =>{

  return(
      <Context.Provider value={"Hi"}>
    {props.children}
      </Context.Provider>
  )
}

export default Com 
