import SearchScreen from './src/screens/SearchScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const navigationMap = {
  Search: SearchScreen,
};

const navigationConfig = {
  initialRouteName: 'Search',
  defaultNavigationOptions: { title: 'Cerca un ristorante' },
};
const navigator = createStackNavigator(navigationMap, navigationConfig);

export default createAppContainer(navigator);
