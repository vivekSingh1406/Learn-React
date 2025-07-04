import React, { createContext, useCallback, useState } from 'react';

export const UserContext = createContext(null);

const data = {
    name: 'Vivek',
    lastName : 'Bais',
    mobileNumber: "97555987366",
    email: 'vivek@example.com',
  }

function ConextProvider(props) {
  const[state,setState] = useState(null);

  const reStore = useCallback(()=>{
    setState(data);
  },[]);

  const clearContext = useCallback(()=>{
    setState(null);
  },[]);


  return (
    <UserContext.Provider value={{state,reStore,clearContext}}>
      {
        props.children
      }
    </UserContext.Provider>
  );
}

export default ConextProvider;
