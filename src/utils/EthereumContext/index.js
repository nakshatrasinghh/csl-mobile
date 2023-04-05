import React, {createContext, useState} from 'react';

export const EthereumContext = createContext();

export const EthereumProvider = ({children}) => {
  const [ethereum, setEthereum] = useState(null);
  const [provider, setProvider] = useState(null);
  const [chainIdData, setChainIdData] = useState(null);
  return (
    <EthereumContext.Provider
      value={{
        ethereum,
        setEthereum,
        provider,
        setProvider,
        setChainIdData,
        chainIdData,
      }}>
      {children}
    </EthereumContext.Provider>
  );
};
