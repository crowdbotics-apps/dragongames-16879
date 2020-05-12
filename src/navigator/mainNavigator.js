import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging44290Navigator from '../features/Messaging44290/navigator';
import Tutorial44289Navigator from '../features/Tutorial44289/navigator';
import Maps44288Navigator from '../features/Maps44288/navigator';
import CalendarView44287Navigator from '../features/CalendarView44287/navigator';
import Camera44286Navigator from '../features/Camera44286/navigator';
import EmailAuth44285Navigator from '../features/EmailAuth44285/navigator';
import BlankScreen42937Navigator from '../features/BlankScreen42937/navigator';
import BlankScreen42936Navigator from '../features/BlankScreen42936/navigator';
import BlankScreen42935Navigator from '../features/BlankScreen42935/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging44290: { screen: Messaging44290Navigator },
Tutorial44289: { screen: Tutorial44289Navigator },
Maps44288: { screen: Maps44288Navigator },
CalendarView44287: { screen: CalendarView44287Navigator },
Camera44286: { screen: Camera44286Navigator },
EmailAuth44285: { screen: EmailAuth44285Navigator },
BlankScreen42937: { screen: BlankScreen42937Navigator },
BlankScreen42936: { screen: BlankScreen42936Navigator },
BlankScreen42935: { screen: BlankScreen42935Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
