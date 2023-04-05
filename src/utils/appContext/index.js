import React, {useEffect, useState} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {QueryCache, useQueryClient} from 'react-query';
import {RemoveData, RetrieveData} from '../storage';
import {CslMixpanel} from '../mixpanel/config';

const AppContext = React.createContext(null);

export const AppProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState('');
  const [user, setUser] = useState({});
  const [userMetaData, setUserMetaData] = useState({});
  const [appLoading, setAppLoading] = useState(false);
  const queryClient = useQueryClient();
  const queryCache = new QueryCache();

  const signoutGlobal = async () => {
    resetAll();
  };

  //on signOut reset all the values
  const resetAll = async () => {
    setAccessToken('');
    setUser({});
    setUserMetaData({});
    await RemoveData('user');
    await RemoveData('tokens');
    await RemoveData('token');
    await RemoveData('introsDone');
    queryCache.clear();
    queryClient.clear();
    CslMixpanel({
      action: 'reset',
      event_name: '',
      status: '',
      message: '',
      payload: {},
    });
  };

  const getAuth0Token = async () => {
    const token = await RetrieveData('token');
    setAccessToken(token);
  };

  useEffect(() => {
    getAuth0Token();
    DeviceEventEmitter.addListener('sign_out_app', signoutGlobal);
  }, []);

  const returnObj = {
    accessToken,
    setAccessToken,
    user,
    setUser,
    appLoading,
    setAppLoading,
    resetAll,
    userMetaData,
    setUserMetaData,
  };

  return (
    <AppContext.Provider value={returnObj}>
      {children}
      {/*<InAppNotificationsLocal />*/}
    </AppContext.Provider>
  );
};

//hook for context
export const useAppContext = () => React.useContext(AppContext);
