import React from 'react';
import {Platform, SafeAreaView, Text} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {EthereumProvider} from './src/utils/EthereumContext';
import {AppProvider} from './src/utils/appContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WalletConnectProvider from '@walletconnect/react-native-dapp';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 2 * 60 * 1000, // 2min
      },
    },
  });
  return (
    <WalletConnectProvider
      bridge="https://bridge.walletconnect.org"
      clientMeta={{
        description: 'Connect with WalletConnect',
        url: 'https://walletconnect.org',
        icons: ['https://walletconnect.org/walletconnect-logo.png'],
        name: 'WalletConnect',
      }}
      redirectUrl={
        Platform.OS === 'web' ? window.location.origin : 'yourappscheme://'
      }
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}>
      <EthereumProvider>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{flex: 1}}>
            <AppProvider>
              <SafeAreaView>
                <Text>Test</Text>
              </SafeAreaView>
            </AppProvider>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </EthereumProvider>
    </WalletConnectProvider>
  );
};

export default App;
