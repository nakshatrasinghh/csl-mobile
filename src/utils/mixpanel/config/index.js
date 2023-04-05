import {Mixpanel} from 'mixpanel-react-native';
import Config from 'react-native-config';
import {ATTEMPT, FAILURE, SUCCESS, VIEWED} from '../actionTypes';

const mixpanel = new Mixpanel(Config.MIXPANEL_TOKEN);
mixpanel.init();
// let env_check = process.env.NODE_ENV === 'production';
let env_check = true;

let actions = {
  identify: id => {
    if (env_check) mixpanel.identify(id);
  },
  alias: id => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  reset: () => {
    if (env_check) mixpanel.reset();
  },
  people: {
    set: props => {
      if (env_check) mixpanel.people.set(props);
    },
  },
};

const CustomMixpanelHook = (
  action,
  event_name,
  status,
  message,
  payload,
  userId,
) => {
  // console.log(action, event_name, status, message, payload, userId);
  let filterStatus =
    status === 'v'
      ? VIEWED(event_name)
      : status === 'a'
      ? ATTEMPT(event_name)
      : status === 's'
      ? SUCCESS(event_name)
      : status === 'f'
      ? FAILURE(event_name)
      : ATTEMPT(event_name);
  // console.log(filterStatus, "filterStatus");
  let customProps = {
    event_name: event_name,
    status: filterStatus,
    message: message,
    payload: payload,
    userId: userId,
  };
  action === 'track' && actions.track(event_name, customProps);
  action === 'identify' && actions.identify(userId);
  action === 'alias' && actions.alias(userId);
  action === 'peopleSet' && actions.people.set(customProps?.payload);
  action === 'reset' && actions.reset();
};

export const CslMixpanel = ({
  action,
  event_name,
  status,
  message,
  payload,
  userId,
}) => CustomMixpanelHook(action, event_name, status, message, payload, userId);
