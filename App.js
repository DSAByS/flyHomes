import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListingScreen from './Src/Screens/InterviewTest';

const checkNav = createStackNavigator(
    {
        Test: ListingScreen,
    },
    {
        initialRouteName: 'Test',
        defaultNavigationOptions: {
            title: 'Test',
        },
    }
);

export default createAppContainer(checkNav);
