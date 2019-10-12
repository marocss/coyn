import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './screens/Main';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
  })
);

export default Routes;
