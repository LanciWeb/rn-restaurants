import SearchScreen from './src/screens/SearchScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigationMap = {
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
};

const navigationConfig = {
  initialRouteName: 'Search',
  defaultNavigationOptions: { title: 'Cerca un locale' },
};
const navigator = createStackNavigator(navigationMap, navigationConfig);

export default createAppContainer(navigator);
