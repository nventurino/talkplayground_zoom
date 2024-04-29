import { getExploreName } from '../utils/platform';

export const devConfig = {
  webEndpoint: 'zoom.us',
  topic: 'mondayTesting',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '1234',
  signature: '',
  role: 1   // The user role. 1 to specify host or co-host. 0 to specify participant, Participants can join before the host. The session is started when the first user joins. Be sure to use a number type.
};
