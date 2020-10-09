import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps133768Navigator from '../features/Maps133768/navigator';
import Settings133746Navigator from '../features/Settings133746/navigator';
import Settings133731Navigator from '../features/Settings133731/navigator';
import NotificationList133730Navigator from '../features/NotificationList133730/navigator';
import Maps133729Navigator from '../features/Maps133729/navigator';
import BlankScreen0133728Navigator from '../features/BlankScreen0133728/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps133768: { screen: Maps133768Navigator },
Settings133746: { screen: Settings133746Navigator },
Settings133731: { screen: Settings133731Navigator },
NotificationList133730: { screen: NotificationList133730Navigator },
Maps133729: { screen: Maps133729Navigator },
BlankScreen0133728: { screen: BlankScreen0133728Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
