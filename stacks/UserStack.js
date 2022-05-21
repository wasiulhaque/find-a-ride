import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from '../screens/MapScreen';
import RideScreen from '../screens/RideScreen';
import PaymentScreen from '../screens/PaymentScreen';
import HomeScreen from '../screens/HomeScreen';

const UserStack = () => {
 const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
                />
                <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
                />
                <Stack.Screen
                name='RideScreen'
                component={RideScreen}
                options={{
                  headerShown: false,
                }}
                />
                <Stack.Screen
                name='PaymentScreen'
                component={PaymentScreen}
                options={{
                  headerShown: false,
                }}
                />
          </Stack.Navigator>
          {/*<HomeScreen/>*/}
    </NavigationContainer>
  )
}

export default UserStack

const styles = StyleSheet.create({})