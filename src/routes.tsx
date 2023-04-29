import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import SearchTickets from './screens/SearchTickets';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="SearchTickets" component={SearchTickets} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default Routes;