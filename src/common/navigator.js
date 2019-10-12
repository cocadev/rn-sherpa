import { createBottomTabNavigator } from 'react-navigation';
import Tab1Screen from '../screens/Main/search';
import Tab2Screen from '../screens/Main/goclub';
import Tab3Screen from '../screens/Main/briefcase';
import Tab4Screen from '../screens/Main/profile';
import NavTabBar from './TabBar/maintabbar';

export const MainNavigator = createBottomTabNavigator(
    {
      Tab1: { screen: Tab1Screen },
      Tab2: { screen: Tab2Screen },
      Tab3: { screen: Tab3Screen },
      Tab4: { screen: Tab4Screen },
    },
    {
      initialRouteName: 'Tab3',
      tabBarComponent: NavTabBar,
      tabBarPosition: 'bottom',
    }
  );
  